function displayServices({ title, pricing, serviceList, paymentUrl }) {
    var cardColorNumber  = 'three';
    // if (title == "Basic Plan") {
    //     cardColorNumber = 'one'
    // } else if (title == "Premium Plan") {
    //     cardColorNumber = 'two'
    // } else if (title == "Express Plan") {
    //     cardColorNumber = 'three'
    // }
    let oldPrice;
    if (pricing?.pricingCent == undefined) {
        oldPrice = ""
    } else {
        oldPrice = `<p class="discount-price">$${pricing?.pricingCent}</p> 
        <div class="discount-stick-one"></div>
        `
    }
    const servicesContainerTemplate = `
    <div class="service-price-card-${cardColorNumber}" style="list-style: none; margin-bottom: 40px;">
        <span class="price-heading" style="font-size: 18px">${title}</span>
        <br></br>
                <div class="price-values">
                    <p class="price-sign">$</p>
                <p class="actual-price">${pricing?.pricingWhole}</p>
                <div class="discount-stick-wrapper">
                ${oldPrice}
            </div>
        </div>

        <br></br>
        ${serviceList}
        <a href="../../checkout/?category=network&params=${title?.toLowerCase()}" target="_blank" class="service-price-button-${cardColorNumber} w-button">Proceed</a>
    </div>
    `;

    // const servicesContainerTemplate = `<div class="h-vps-pricing-card h-vps-pricing-card--narrow" dir="ltr"
    //     narrow="false" type="default" is-features-open="false"
    //     switcher-value="components.pricingTable.vpsKvmHosting"
    //     show-sale-offer="false" button-text="" card-color="light"
    //     data-v-f0b03e69="" data-v-061eb495="">
    //     <div class="h-vps-pricing-card__container--popular h-vps-pricing-card__container"
    //         data-v-061eb495="">
    //         <div class="h-vps-pricing-card__badge" data-v-061eb495="">
    //             <div class="h-product-badge h-product-badge-bg-danger-light"
    //                 dir="ltr" data-v-061eb495="" data-v-dd2a6818="">
    //                     <h4 style="padding-top: 15px;">${title}</h4>
    //             </div>
    //         </div>
    //         <div class="elementor-element elementor-element-e5557c4 elementor-widget elementor-widget-price-table"
    //             data-id="e5557c4" data-element_type="widget"
    //             data-widget_type="price-table.default">
    //             <div class="elementor-widget-container">
    //                 <style>
    //                     /*! elementor-pro - v3.7.3 - 31-07-2022 */
    //                     .elementor-widget-price-list .elementor-price-list {
    //                         list-style: none;
    //                         padding: 0;
    //                         margin: 0
    //                     }

    //                     .elementor-widget-price-list .elementor-price-list li {
    //                         margin: 0
    //                     }

    //                     .elementor-price-list li:not(:last-child) {
    //                         margin-bottom: 20px
    //                     }

    //                     .elementor-price-list .elementor-price-list-image {
    //                         max-width: 50%;
    //                         -ms-flex-negative: 0;
    //                         flex-shrink: 0;
    //                         padding-right: 25px
    //                     }

    //                     .elementor-price-list .elementor-price-list-image img {
    //                         width: 100%
    //                     }

    //                     .elementor-price-list .elementor-price-list-header,
    //                     .elementor-price-list .elementor-price-list-item,
    //                     .elementor-price-list .elementor-price-list-text {
    //                         display: -webkit-box;
    //                         display: -ms-flexbox;
    //                         display: flex
    //                     }

    //                     .elementor-price-list .elementor-price-list-item {
    //                         -webkit-box-align: start;
    //                         -ms-flex-align: start;
    //                         align-items: flex-start
    //                     }

    //                     .elementor-price-list .elementor-price-list-item .elementor-price-list-text {
    //                         -webkit-box-align: start;
    //                         -ms-flex-align: start;
    //                         align-items: flex-start;
    //                         -ms-flex-wrap: wrap;
    //                         flex-wrap: wrap;
    //                         -webkit-box-flex: 1;
    //                         -ms-flex-positive: 1;
    //                         flex-grow: 1
    //                     }

    //                     .elementor-price-list .elementor-price-list-item .elementor-price-list-header {
    //                         -webkit-box-align: center;
    //                         -ms-flex-align: center;
    //                         align-items: center;
    //                         -ms-flex-preferred-size: 100%;
    //                         flex-basis: 100%;
    //                         font-size: 19px;
    //                         font-weight: 600;
    //                         margin-bottom: 10px;
    //                         -webkit-box-pack: justify;
    //                         -ms-flex-pack: justify;
    //                         justify-content: space-between
    //                     }

    //                     .elementor-price-list .elementor-price-list-item .elementor-price-list-title {
    //                         max-width: 80%
    //                     }

    //                     .elementor-price-list .elementor-price-list-item .elementor-price-list-price {
    //                         font-weight: 600
    //                     }

    //                     .elementor-price-list .elementor-price-list-item p.elementor-price-list-description {
    //                         -ms-flex-preferred-size: 100%;
    //                         flex-basis: 100%;
    //                         font-size: 14px;
    //                         margin: 0
    //                     }

    //                     .elementor-price-list .elementor-price-list-item .elementor-price-list-separator {
    //                         -webkit-box-flex: 1;
    //                         -ms-flex-positive: 1;
    //                         flex-grow: 1;
    //                         margin-left: 10px;
    //                         margin-right: 10px;
    //                         border-bottom-style: dotted;
    //                         border-bottom-width: 2px;
    //                         height: 0
    //                     }

    //                     .elementor-price-table {
    //                         text-align: center
    //                     }

    //                     .elementor-price-table .elementor-price-table__header {
    //                         background: var(--e-price-table-header-background-color, #555);
    //                         padding: 20px 0
    //                     }

    //                     .elementor-price-table .elementor-price-table__heading {
    //                         margin: 0;
    //                         padding: 0;
    //                         line-height: 1.2;
    //                         font-size: 24px;
    //                         font-weight: 600;
    //                         color: #fff
    //                     }

    //                     .elementor-price-table .elementor-price-table__subheading {
    //                         font-size: 13px;
    //                         font-weight: 400;
    //                         color: #fff
    //                     }

    //                     .elementor-price-table .elementor-price-table__original-price {
    //                         margin-right: 15px;
    //                         text-decoration: line-through;
    //                         font-size: .5em;
    //                         line-height: 1;
    //                         font-weight: 400;
    //                         -ms-flex-item-align: center;
    //                         align-self: center
    //                     }

    //                     .elementor-price-table .elementor-price-table__original-price .elementor-price-table__currency {
    //                         font-size: 1em;
    //                         margin: 0
    //                     }

    //                     .elementor-price-table .elementor-price-table__price {
    //                         display: -webkit-box;
    //                         display: -ms-flexbox;
    //                         display: flex;
    //                         -webkit-box-pack: center;
    //                         -ms-flex-pack: center;
    //                         justify-content: center;
    //                         -webkit-box-align: center;
    //                         -ms-flex-align: center;
    //                         align-items: center;
    //                         -ms-flex-wrap: wrap;
    //                         flex-wrap: wrap;
    //                         -webkit-box-orient: horizontal;
    //                         -webkit-box-direction: normal;
    //                         -ms-flex-direction: row;
    //                         flex-direction: row;
    //                         color: #555;
    //                         font-weight: 800;
    //                         font-size: 65px;
    //                         padding: 40px 0
    //                     }

    //                     .elementor-price-table .elementor-price-table__price .elementor-typo-excluded {
    //                         line-height: normal;
    //                         letter-spacing: normal;
    //                         text-transform: none;
    //                         font-weight: 400;
    //                         font-size: medium;
    //                         font-style: normal
    //                     }

    //                     .elementor-price-table .elementor-price-table__after-price {
    //                         display: -webkit-box;
    //                         display: -ms-flexbox;
    //                         display: flex;
    //                         -ms-flex-wrap: wrap;
    //                         flex-wrap: wrap;
    //                         text-align: left;
    //                         -ms-flex-item-align: stretch;
    //                         align-self: stretch;
    //                         -webkit-box-align: start;
    //                         -ms-flex-align: start;
    //                         align-items: flex-start;
    //                         -webkit-box-orient: vertical;
    //                         -webkit-box-direction: normal;
    //                         -ms-flex-direction: column;
    //                         flex-direction: column
    //                     }

    //                     .elementor-price-table .elementor-price-table__integer-part {
    //                         line-height: .8
    //                     }

    //                     .elementor-price-table .elementor-price-table__currency,
    //                     .elementor-price-table .elementor-price-table__fractional-part {
    //                         line-height: 1;
    //                         font-size: .3em
    //                     }

    //                     .elementor-price-table .elementor-price-table__currency {
    //                         margin-right: 3px
    //                     }

    //                     .elementor-price-table .elementor-price-table__period {
    //                         width: 100%;
    //                         font-size: 13px;
    //                         font-weight: 400
    //                     }

    //                     .elementor-price-table .elementor-price-table__features-list {
    //                         list-style-type: none;
    //                         margin: 0;
    //                         padding: 0;
    //                         line-height: 1;
    //                         color: var(--e-price-table-features-list-color)
    //                     }

    //                     .elementor-price-table .elementor-price-table__features-list li {
    //                         font-size: 14px;
    //                         line-height: 1;
    //                         margin: 0;
    //                         padding: 0
    //                     }

    //                     .elementor-price-table .elementor-price-table__features-list li .elementor-price-table__feature-inner {
    //                         margin-left: 15px;
    //                         margin-right: 15px
    //                     }

    //                     .elementor-price-table .elementor-price-table__features-list li:not(:first-child):before {
    //                         content: "";
    //                         display: block;
    //                         border: 0 solid hsla(0, 0%, 47.8%, .3);
    //                         margin: 10px 12.5%
    //                     }

    //                     .elementor-price-table .elementor-price-table__features-list i {
    //                         margin-right: 10px;
    //                         font-size: 1.3em
    //                     }

    //                     .elementor-price-table .elementor-price-table__features-list svg {
    //                         margin-right: 10px;
    //                         fill: var(--e-price-table-features-list-color);
    //                         height: 1.3em;
    //                         width: 1.3em
    //                     }

    //                     .elementor-price-table .elementor-price-table__features-list svg~* {
    //                         vertical-align: text-top
    //                     }

    //                     .elementor-price-table .elementor-price-table__footer {
    //                         padding: 30px 0
    //                     }

    //                     .elementor-price-table .elementor-price-table__additional_info {
    //                         margin: 0;
    //                         font-size: 13px;
    //                         line-height: 1.4
    //                     }

    //                     .elementor-price-table__ribbon {
    //                         position: absolute;
    //                         top: 0;
    //                         left: auto;
    //                         right: 0;
    //                         -webkit-transform: rotate(90deg);
    //                         -ms-transform: rotate(90deg);
    //                         transform: rotate(90deg);
    //                         width: 150px;
    //                         overflow: hidden;
    //                         height: 150px
    //                     }

    //                     .elementor-price-table__ribbon-inner {
    //                         text-align: center;
    //                         left: 0;
    //                         width: 200%;
    //                         -webkit-transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    //                         -ms-transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    //                         transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    //                         margin-top: 35px;
    //                         font-size: 13px;
    //                         line-height: 2;
    //                         font-weight: 800;
    //                         text-transform: uppercase;
    //                         background: #000
    //                     }

    //                     .elementor-price-table__ribbon.elementor-ribbon-left {
    //                         -webkit-transform: rotate(0);
    //                         -ms-transform: rotate(0);
    //                         transform: rotate(0);
    //                         left: 0;
    //                         right: auto
    //                     }

    //                     .elementor-price-table__ribbon.elementor-ribbon-right {
    //                         -webkit-transform: rotate(90deg);
    //                         -ms-transform: rotate(90deg);
    //                         transform: rotate(90deg);
    //                         left: auto;
    //                         right: 0
    //                     }

    //                     .elementor-widget-price-table .elementor-widget-container {
    //                         overflow: hidden;
    //                         /* background-color: #f7f7f7 */
    //                     }

    //                     .e-container>.elementor-widget-price-list {
    //                         width: var(--container-widget-width, 100%)
    //                     }
    //                 </style>
    //                 <div class="elementor-price-table">

    //                     <div class="elementor-price-table__price">
    //                         <span
    //                             class="elementor-price-table__currency">&#163;</span>
    //                         <span class="elementor-price-table__integer-part">
    //                             ${pricing?.pricingWhole} </span>

    //                         <div class="elementor-price-table__after-price">
    //                             <span
    //                                 class="elementor-price-table__fractional-part">
    //                                 ${pricing?.pricingCent} </span>
    //                         </div>
    //                     </div>


    //                     <ul role="list" class="pricing-features w-list-unstyled" id="servicesLists">
    //                         ${serviceList}
    //                     </ul>

    //                     <div class="elementor-price-table__footer">
    //                         <a class="elementor-price-table__button elementor-button elementor-size-md"
    //                             href="http://localhost:5500/checkout/?params=${title?.toLowerCase()}" target="_blank">
    //                             Click Here </a>

    //                         <div class="elementor-price-table__additional_info">
    //                             This is text element </div>
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    // </div>`;

    //   console.log(`http://localhost:5500/checkout?${PaymentUrl}`);

    document.getElementById("servicesContainer").innerHTML +=
        servicesContainerTemplate;
}

function myDisplayer(some) {
    console.log(typeof some);
}

function getFile(data) {
    const serviceListsTemplate = `<li class="elementor-repeater-item-270fc08">
    <div
        class="elementor-price-table__feature-inner">
        <svg data-v-b45ae079=""
            xmlns="http://www.w3.org/2000/svg" height="16"
            width="16" viewBox="0 0 24 24"
            aria-labelledby="check" role="presentation"
            class="h-icon success">
            <g data-v-b45ae079="">
                <path data-v-b45ae079=""
                    d="M19.9999 8.34412C20.0039 8.60343 19.8989 8.85254 19.7105 9.03076L12.2373 16.3439L10.8333 17.7171C10.648 17.9023 10.3953 18.0044 10.1334 17.9998C9.87044 18.0051 9.61672 17.903 9.4307 17.7171L8.02672 16.3439L4.28944 12.6866C4.10103 12.5084 3.99607 12.2593 4.00011 12C4.00011 11.7307 4.09611 11.5013 4.28944 11.3134L5.69342 9.94007C5.87889 9.75404 6.13209 9.65152 6.39474 9.65608C6.67074 9.65608 6.90407 9.75074 7.0974 9.94007L10.132 12.9186L16.9026 6.28285C17.0886 6.09698 17.3423 5.99492 17.6052 6.00019C17.8799 6.00019 18.1146 6.09353 18.3066 6.28285L19.7105 7.65614C19.8993 7.83468 20.0043 8.08434 19.9999 8.34412V8.34412Z">
                </path>
            </g>
        </svg> + <span>${Services}</span>
    </div>
    </li>`;
}
let serviceListsTemplate = "";
let serviceListArray = [];
let serviceGroup = ``;

function GetServiceLists({serviceList, cardIndex}) {
    var cardColorNumber = "price-plan-icon-three";
    // if (cardIndex == 0) {
    //     cardColorNumber = 'price-check-icon-one'
    // } else if (cardIndex == 1) {
    //     cardColorNumber = 'price-check-icon-two'
    // } else if (cardIndex == 2) {
    //     cardColorNumber = 'price-plan-icon-three'
    // }
    console.log(serviceList);
    serviceGroup = "";
    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i]);

        serviceGroup += `
            <div class="price-list">
                <p class="${cardColorNumber}"></p>
                <p class="price-offer-text" style="font-size: 16px">${serviceList[i]}</p>
            </div>`;

        // serviceGroup += `<li class="elementor-repeater-item-270fc08">
        // <div
        //     class="elementor-price-table__feature-inner">
        //     <svg data-v-b45ae079=""
        //         xmlns="http://www.w3.org/2000/svg" height="16"
        //         width="16" viewBox="0 0 24 24"
        //         aria-labelledby="check" role="presentation"
        //         class="h-icon success">
        //         <g data-v-b45ae079="">
        //             <path data-v-b45ae079=""
        //                 d="M19.9999 8.34412C20.0039 8.60343 19.8989 8.85254 19.7105 9.03076L12.2373 16.3439L10.8333 17.7171C10.648 17.9023 10.3953 18.0044 10.1334 17.9998C9.87044 18.0051 9.61672 17.903 9.4307 17.7171L8.02672 16.3439L4.28944 12.6866C4.10103 12.5084 3.99607 12.2593 4.00011 12C4.00011 11.7307 4.09611 11.5013 4.28944 11.3134L5.69342 9.94007C5.87889 9.75404 6.13209 9.65152 6.39474 9.65608C6.67074 9.65608 6.90407 9.75074 7.0974 9.94007L10.132 12.9186L16.9026 6.28285C17.0886 6.09698 17.3423 5.99492 17.6052 6.00019C17.8799 6.00019 18.1146 6.09353 18.3066 6.28285L19.7105 7.65614C19.8993 7.83468 20.0043 8.08434 19.9999 8.34412V8.34412Z">
        //             </path>
        //         </g>
        //     </svg><span>${serviceList[i]}</span>
        // </div>
        // </li>`;
    }
}

async function AllServiceList(data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        serviceListArray = data[i].serviceList;
        console.log(serviceListArray)

        GetServiceLists({serviceList: serviceListArray, cardIndex: i});

        displayServices({
            title: data[i].title,
            pricing: data[i].pricing,
            serviceList: serviceGroup,
            paymentUrl: data[i].paymentUrl,
        });
    }
}
const myList = document.querySelector("ul");
const myRequest = new Request("http://localhost:5500/services/dbFiles.json");
const myRequest2 = new Request("https://crdquqf8.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22network%22%5D");

fetch(myRequest2)
    .then((response) => response.json())
    .then((data) => {
        AllServiceList(data.result);
        // console.log(data.result)
    }).catch(console.error);


//     fetch(myRequest2, {
//   mode: 'no-cors'
// })
//   .then((response) => response)
//   .then((data) => {
//     console.log(data)
//   })
//   .catch(error => console.error(error));

// fetch(myRequest2, {
//     mode: 'no-cors'
// })
//     .then((response) => response)
//     .then((data) => {
//         // AllServiceList(data.servicesData);
//         console.log(data)
//     }).catch(console.error);


// async function getServiceData() {

//     let url = "https://crdquqf8.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22system%22%5D"
//     let x = await fetch(url);
//     let y = await x.json();
//     let data = y.result;
//     // AllServiceList(data);
//     // console.log(data)
//     // document.getElementById("displayName").innerHTML = data?.userInformation.firstname + " " + data.userInformation.lastname

//     // if (orderArray?.length == 0) {
//     //     document.getElementsByTagName("tbody")[0].innerHTML = noRecord
//     //     document.getElementsByTagName("tbody")[1].innerHTML = noRecord
//     //     document.getElementsByTagName("tbody")[2].innerHTML = noRecord
//     // }

//     // if (orderArray == undefined) {
//     //     document.getElementsByTagName("tbody")[0].innerHTML = noRecord
//     //     document.getElementsByTagName("tbody")[1].innerHTML = noRecord
//     //     document.getElementsByTagName("tbody")[2].innerHTML = noRecord
//     // }

//     // for (let i = 0; i < orderArray?.length; i++) {
//     //     if (orderArray != []) {
//     //         getTableData({trackingId:orderArray[i]?.TrackingID, status:orderArray[i]?.parcelStatus, recipient:orderArray[i]?.RecipientName})
//     //     }
//     //   }
// }

// getServiceData()