CREATE MIGRATION m1teaa6byn4sqhkpqp7kg3qg2lawud54heyod6pbt3z4sb4zccobga
    ONTO initial
{
  CREATE ABSTRACT TYPE default::HasTimestamps {
      CREATE REQUIRED PROPERTY created_at -> std::datetime {
          SET default := (std::datetime_current());
          SET readonly := true;
      };
      CREATE REQUIRED PROPERTY updated_at -> std::datetime {
          SET default := (std::datetime_current());
      };
  };
  CREATE SCALAR TYPE default::TestStatus EXTENDING enum<Pending, Aborted, Completed>;
  CREATE TYPE default::TestResult EXTENDING default::HasTimestamps {
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY output -> std::json {
          SET default := (std::to_json('{}'));
      };
      CREATE REQUIRED PROPERTY status -> default::TestStatus {
          SET default := (default::TestStatus.Pending);
      };
  };
  CREATE TYPE default::DomainTestRun EXTENDING default::HasTimestamps {
      CREATE MULTI LINK test_results -> default::TestResult;
      CREATE REQUIRED PROPERTY test_arguments -> std::json;
      CREATE REQUIRED PROPERTY url -> std::str;
  };
  CREATE TYPE default::Domain EXTENDING default::HasTimestamps {
      CREATE MULTI LINK test_runs -> default::DomainTestRun;
      CREATE REQUIRED PROPERTY title -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
