import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip, Cell } from "recharts";

const RaceEthnicityChart = (props) => {
  const program = props.data;
  console.log(program);

  // Reformat data to create a doughnut chart
  const data = [];
  Object.keys(program).forEach((key) => {

    const percentVal = program[key] * 100;
    
    // only add in the data if it's not null
    if (program[key] != null) {
      data.push({
        name: key,
        value: +percentVal.toFixed(2),
      });
    }
  });

  // data.sort((a, b) => a.value > b.value && 1 || -1);

  console.log("new data: ", data);

  const colors = ["#c5050c", "#0479a8", "#ffbf00", "#737373"];

  if (program) {
    return (
      <ResponsiveContainer width="95%" height={390}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={150}
            paddingAngle={3}
            dataKey="value"
            label={(entry) => `${entry.name} ${entry.value}`}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  } else {
    return <div>No data in race and ethnicity to display</div>;
  }
};

export default RaceEthnicityChart;
