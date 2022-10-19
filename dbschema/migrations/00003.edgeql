CREATE MIGRATION m12kwkoxwgrlql4himsspactju3m47bjoaanf6cmehdy4kb3c4u7sa
    ONTO m1ovi4uxedsl5b3hyi4pbigmsw362xpepdcetk4pbz4abedpuntuba
{
  ALTER TYPE default::HasTimestamps {
      ALTER PROPERTY updated_at {
          RESET default;
          RESET OPTIONALITY;
      };
  };
};
