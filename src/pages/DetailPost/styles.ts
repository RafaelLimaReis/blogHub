import Markdown from "react-markdown";
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const MarkdownContainer = styled(Markdown)`
    p {
        ${mixins.fonts.textM}
        color: ${props => props.theme["base-text"]};
        margin-bottom: 20px;
    }

    a {
        ${mixins.fonts.link}
        color: ${props => props.theme.blue};
    }
    img {
        width: 100%;
    }
`