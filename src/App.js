import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import ProgramChart from './components/ProgramChart';
import RaceEthnicityChart from './components/RaceEthnicityChart';
import SchoolInfo from './components/SchoolInfo';
import Admissions from './components/Admissions';
import Buttons from './components/Buttons';
import ReactLoading from 'react-loading';

const App = () => {
  
  const ref = React.createRef();

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [school, setSchoolData] = useState(null);
  const [programPercentage, setProgramPercentage] = useState(null);
  const [raceEthnicity, setRaceEthnicity] = useState(null);
  const [admissionsAct, setAdmissionsAct] = useState(null);

  useEffect(() => {
    axios.get('/api')
      .then(res => {
        setLoading(true);
        let data = res.data.results[0];

        const enrollment = data.latest.student.enrollment;

        // Get data for school information
        const school = {
          name: data.school.name,
          alias: data.school.alias,
          website: data.school.school_url,
          city: data.school.city,
          state: data.school.state,
          zip: data.school.zip,
          population: enrollment["grad_12_month"] + enrollment["undergrad_12_month"]
        }
        setSchoolData(school);

        // Get data on program percentage
        const programData = data.latest.academics.program_percentage;
        setProgramPercentage(programData);

        // Get demographic (race/ethnicity) data
        const studentRaceData = data.latest.student.demographics.race_ethnicity;
        setRaceEthnicity(studentRaceData);

        const admissionsData = data.latest.admissions.act_scores;
        setAdmissionsAct(admissionsData);

        setLoading(false);
        setErr(false);
      })
      .catch(err => {
        setErr(true)
        setLoading(false);
        console.log(err); 
      });

    }, [])

  return (
    <div className="App" ref={ref}>
      <h1 className="heading">School Profile</h1>
      { loading ?
      <>
        <p>Fetching school data...</p>
        <ReactLoading className="loading" color={'#808080'} type={'spinningBubbles'} height={'10%'} width={'10%'} />
      </>
      :
      !err ?
        <>
          <Buttons data={{school, programPercentage, raceEthnicity, admissionsAct}} targetRef={ref} />
          <SchoolInfo data={school} />
          <div>
            <h2>Programs</h2>
            <ProgramChart data={programPercentage} />
          </div>
          <div>
            <h2>Race and Ethnicity</h2>
            <RaceEthnicityChart data={raceEthnicity} />
          </div>
          <div>
            <h2>ACT Scores</h2>
            <Admissions data={admissionsAct} />
          </div>
        </>
        : <div>Sorry, couldn't fetch the data :(</div>
      }
    </div>
  );
}

export default App;
