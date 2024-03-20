import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

`


export const NavBarStyled = styled.nav`
    width:100%;
    background-color: #9bbcdf;
    padding-top: 15px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    li {
        width: 125px;
        height: 50px;
        transition: background-position-x 0.9s linear;
        text-align: center;

        a {
            font-size: 22px;
            color: #777;
            font-weight: bold;
            text-decoration: none;
            transition: all 0.45s;
        }

        &:hover {
            background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIzOTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgMzkwIDUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzOTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3Y2ZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMA0KCWMxMy43NSwwLDI4Ljc0LTM4Ljc3OCw0Ni4xNjgtMTkuNDE2QzE5Mi42NjksNDYuNSwyNDMuNjAzLDQ3LjU4NSwyNjAsNDcuNTg1YzMxLjgyMSwwLDEzMCwwLDEzMCwwIi8+DQo8L3N2Zz4=");
  -webkit-animation: line 1s;
          animation: line 1s;
          cursor: pointer;

            a{
                color: #007cff;
            }
        }
        &:not(:last-child) {
            margin-right: 30px;
        }
    }

`