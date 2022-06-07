import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";
import "./Chart.module.scss";

const correct = 92;
const incorrect = 8;

const data = [
	{ name: "Correct", value: correct },
  { name: "Incorrect", value: incorrect },
];

const COLORS = ["#FF6B01", "#D7D7D7"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {

  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="black"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
      {`${(percent * 100).toFixed(0)}%`} {data[index].name}
		</text>
	);
};

export default function Chart() {
	return (
		<AutoSizer>
			{({ width, height }) => (
				<PieChart width={width} height={height}>
					<Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius="100%"
            fill="#000000"
            dataKey="value"
            viewBox={{ width: 10, height: 10 }}
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			)}
		</AutoSizer>
	);
}
