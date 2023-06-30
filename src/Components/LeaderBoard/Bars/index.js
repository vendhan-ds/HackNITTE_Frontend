import { Grid, MediaQuery, Text } from "@mantine/core";

import styles from "./styles.module.css";

export const Bars = ({ data }) => {
	const gridParams = [
		{
			span: 2,
			xs_sm: 4,
			md_lg: 2,
			margin: "0 0 0 2rem",
			svg: false,
			color: 0,
		},
		{
			span: 7,
			xs_sm: 5,
			md_lg: 4,
			margin: "0 0 0 1rem",
			svg: false,
			color: 1,
		},
		{
			span: 3,
			xs_sm: 3,
			md_lg: 3,
			margin: "0 5rem 0 0",
			svg: false,
			color: 1,
		},
        {
			span: 4,
			xs_sm: 4,
			md_lg: 3,
			margin: "0 0.5rem 0 0",
			svg: true,
			color: 1,
			textAlign: "left",
		},
	];
	const details = [data.rank, data.userName, data.score,data.dept];
	return (
		<Grid align="center" className={styles.container}>
			{gridParams.map((params, index) => (
				<Grid.Col
					span={params.span}
					xs={params.xs_sm}
					sm={params.xs_sm}
					md={params.md_lg}
					lg={params.md_lg}
					sx={() => ({ padding: "0rem" })}
					key={index}
				>
					<div className={params.svg ? styles.daysbox : ""}>
						<MediaQuery
							query="(max-width: 991px)"
							styles={{
								fontSize: '0.9rem',
								marginTop: "0.4rem",
							}}
						>
							<Text
								sx={(theme) => ({
									color: params.color
										? 'white'
										: 'white',
									fontSize: '1.2rem',
									fontWeight: 700,
									margin: params.margin,
								})}
							>
								{details[index]}
							</Text>
						</MediaQuery>
						
					</div>
				</Grid.Col>
			))}
		</Grid>
	);
};

export default Bars;