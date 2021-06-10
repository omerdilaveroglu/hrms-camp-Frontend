import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";;
import JobList from "../pages/JobList";
import EmployeeList from "../pages/EmployeeList";



export default function Section() {
  return (
    <div>
      <Grid>

        <Grid.Row>
          <GridColumn size={15}>
            <JobList/>
          </GridColumn>
        </Grid.Row>

        <Grid.Row>
          <GridColumn size={15}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>

        <Grid.Row>
          <GridColumn size={15}>
            <EmployeeList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  ); 

  }