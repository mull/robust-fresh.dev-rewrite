module default {
  abstract type HasTimestamps {
    required property created_at -> datetime {
      default := std::datetime_current();
      readonly := true;
    }

    property updated_at -> datetime;
  }

  type Domain extending HasTimestamps {
    required property title -> str {
      constraint exclusive;
    }

    multi link test_runs -> TestRun;
  }

  type TestRun extending HasTimestamps {
    required property url -> str;
    required property test_arguments -> json;

    multi link test_results -> TestResult
  }

  scalar type TestStatus extending enum<Pending, Aborted, Completed>;

  type TestResult extending HasTimestamps {
    required property name -> str;
    required property status -> TestStatus {
      default := TestStatus.Pending; 
    }
    required property output -> json {
      default := to_json('{}');
    }
  }

}
