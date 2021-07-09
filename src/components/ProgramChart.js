import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

const ProgramChart = (props) => {
  const program = props.data;

  // Reformat data to create a doughnut chart
  const data = [];
  Object.keys(program).forEach((key) => {
    const percentVal = program[key] * 100;
    if (percentVal > 3) {
      console.log(percentVal, "big enough");
      data.push({
        name: key,
        value: +percentVal.toFixed(2),
      });
    } else {
      const objIndex = data.findIndex((obj => obj.name === "other"));
      if (objIndex >= 0) {
        // console.log(data.filter((item) => item.name === "other"));
        let other = data[objIndex].value;
        const total = other + percentVal;
        console.log(total);

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
      <ResponsiveContainer width="95%" height={390}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={150}
            paddingAngle={0}
            dataKey="value"
            label={(entry) => `${entry.name} ${entry.value}`}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  } else {
    return <div>No data in program percentage to display</div>;
  }
};

export default ProgramChart;
