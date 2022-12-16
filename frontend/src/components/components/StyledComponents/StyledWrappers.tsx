import styled from "styled-components";

interface IFlexDivProps {
  dir?: string;
  align?: string;
  justify?: string;
  wrap?: string;
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props: IFlexDivProps) => props.dir || "row"};
  justify-content: ${(props: IFlexDivProps) => props.justify || "center"};
  align-items: ${(props: IFlexDivProps) => props.align || "center"};
  @media screen and (min-width: 640px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
