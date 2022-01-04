import styled from 'styled-components';

export const QuoteStyles = styled.div`
    #products-list {
        background: rgba(0, 0, 0, 0.1);

        ul {
            list-style: none;
            padding-left: 0;

            li {
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: 0.1s ease-in-out;

                img {
                    height: 40px;
                    width: 40px;
                    object-fit: contian;
                    margin-right: 5px;
                }

                &.active,
                &:hover {
                    background: rgba(250, 250, 250, 0.1);
                }
            }
        }
    }

    .wood-imitation {
        display: grid;
        grid-template-columns: repeat(auto-fill, 50px);
        grid-gap: 5px;
        justify-content: center;
        margin: 10px 0;

        .form-check {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }

        .form-check-input {
            margin: 2px auto;
        }

        img {
            height: 50px;
            width: 50px;
            object-fit: cover;
        }
    }

    #quote-details {
        .accordion {
            color: black;

            ul {
                list-style: none;
                padding-left: 0;
            }
        }
    }

    #personal-info {
        label {
            color: black;
        }
    }
`;
