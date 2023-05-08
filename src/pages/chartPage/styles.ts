import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    min-height: 100vh;

    justify-content: center;
    align-items: center;

    padding: 40px 0;

    gap: 3rem;

    .chart {
        width: 50%;
    }

    button {
        padding: 10px 15px;
        background: #3498db;
        border: 0;
        color: #fff;
        font-weight: 500;
        border-radius: 6px;

        transition: all;
        transition: .3s;

        cursor: pointer;

        &:hover {
            filter: brightness(.8);
        }
    }
`;
export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 400;
`;