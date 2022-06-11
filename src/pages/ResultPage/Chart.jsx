import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";
import "./Chart.module.scss";

export default function Chart(props) {
	const { correct, incorrect } = props;

	// const correct = 1;
	// const incorrect = 12 - correct;

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

		let angle = 0;

		if (midAngle < 180) {
			angle = 120;
		} else if (midAngle > 180) {
			angle = 240;
		} else if (correct === 0) {
			angle = 240;
		} else {
			angle = 120;
		}

		const y = cy + radius * (Math.sin(-angle * RADIAN) / 4);
		const x = cx + radius - 10;

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

	return (
		<AutoSizer>
			{({ width, height }) => (
				<PieChart width={width} height={height}>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						labelLine={false}
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
