import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const Admissions = (props) => {
  const program = props.data;

  // Reformat data to create a bar chart
  const data = [];
  Object.keys(program).forEach((key) => {
    data.push({
      name: key,
      cumulative: program[key].cumulative,
      english: program[key].english,
      math: program[key].math,
      writing: program[key].writing,
    });
  });

  if (program) {
    return (
      <>
      <ResponsiveContainer width="75%" height={270}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cumulative" fill="#c5050c">
            <LabelList dataKey="cumulative" position="top" />
          </Bar>
          <Bar dataKey="english" fill="#0479a8">
            <LabelList dataKey="english" position="top" />
          </Bar>
          <Bar dataKey="math" fill="#ffbf00">
            <LabelList dataKey="math" position="top" />
          </Bar>
          <Bar dataKey="writing" fill="#737373">
            <LabelList dataKey="writing" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </>
    );
  } else {
    return <div>No ACT scores data to display</div>;
  }
};

export default Admissions;
