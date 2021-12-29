import styled from 'styled-components';

export const QuoteStyles = styled.div`
    #product-list {
        ul {
            list-style: none;
            height: 400px;
            overflow-y: scroll;
            padding-left: 0;

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin: 5px 0;
                cursor: pointer;

                &.active {
                    background: rgba(0, 0, 0, 0.1);
                }

                img {
                    height: 50px;
                    width: 50px;
                    object-fit: cover;
                    margin-right: 10px;
                }
            }
        }
    }

    #product-reqs {
        form {
            .form-control {
                margin: 5px 0 !important;
            }
        }

        .react-multi-carousel-track {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                transform: translateX(20px);
            }
        }
        .react-multi-carousel-list {
        }

        .carousel-item {
            position: relative !important;
            display: block;
        }
    }

    #color-picker {
        #wood-imitation {
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
    }
`;
