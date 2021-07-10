import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";

const RaceEthnicityChart = (props) => {
  const program = props.data;

  // Reformat data to create a doughnut chart
  const data = [];
  Object.keys(program).forEach((key) => {

    const percentVal = program[key] * 100;
    
    // only add in the data if it's not null
    if (program[key] != null) {
      data.push({
        name: key,
        value: +percentVal.toFixed(2)
      });
    }
  });

  const colors = ["#c5050c", "#0479a8", "#ffbf00", "#737373"];

  if (program) {
    return (
      <ResponsiveContainer width="95%" height={340}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={140}
            paddingAngle={3}
            dataKey="value"
            label={(item) => `${item.name} ${item.value}`}
            isAnimationActive={false}
          >
            {data.map((item, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  } else {
    return <div>No race and ethnicity data to display</div>;
  }
};

export default RaceEthnicityChart;
