import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

const ProgramChart = (props) => {
  const program = props.data;

  // Reformat data to create a doughnut chart
  const data = [];
  Object.keys(program).forEach((key) => {
    const percentVal = program[key] * 100;
    // display data if value is greater than 3
    if (percentVal > 3) {
      data.push({
        name: key,
        value: +percentVal.toFixed(2),
      });
    } 
    // Grouped small ones into an "other" category
    else {
      const objIndex = data.findIndex((obj => obj.name === "other"));
      if (objIndex >= 0) {
        let other = data[objIndex].value;
        const total = other + percentVal;
        data[objIndex].value = +total.toFixed(2);
      }
      else {
        data.push({
          name: "other",
          value: +percentVal.toFixed(2)
        })
      }
    }

  });

  const colors = ["#c5050c", "#0479a8", "#ffbf00", "#737373"];

  if (program) {
    return (
      <ResponsiveContainer width="95%" height={330}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={140}
            paddingAngle={0}
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
    return <div>No program data to display</div>;
  }
};

export default ProgramChart;
