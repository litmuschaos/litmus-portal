import React from "react";
import { CardProps } from "../../models/customCard";
import CardContainer from "./CardContainer";
import CardContent from "./CardContent";

export default function CustomCard(props: CardProps) {
	return (
		<CardContainer>
			<CardContent {...props} />
		</CardContainer>
	);
}
