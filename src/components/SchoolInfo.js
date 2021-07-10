import {
  FaUniversity,
  FaMapMarkerAlt,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";

const SchoolInfo = (props) => {
  const school = props.data;

  if (school) {
    return (
      <div className="school">
        <h2>
          <FaUniversity /> {school.name} {school.alias ? school.alias : ""}
        </h2>
        <p>
          <FaMapMarkerAlt /> {school.city}, {school.state}, {school.zip} 
        </p>
        <p>
          <FaExternalLinkAlt /> Visit their website at:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://${school.website}`}
          >
            {school.website}
          </a>
        </p>
        <p>
          <FaUsers /> School Population: {school.population}
        </p>
      </div>
    );
  } else {
    return <div>No data to display</div>;
  }
};

export default SchoolInfo;
