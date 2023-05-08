import * as s from "./styles";

interface props {
    title?: string;
    data: object;
}

export default function Chart(props: props) {
    return (
        <s.Container>
            <s.Title>{props.title}</s.Title>
        </s.Container>
    )
}