function displayServices({ title, pricing, serviceList, paymentUrl }) {
    var cardColorNumber  = 'three';
    let oldPrice;
    if (pricing?.pricingCent == undefined) {
        oldPrice = ""
    } else {
        oldPrice = `<p class="discount-price">£${pricing?.pricingCent}</p> 
        <div class="discount-stick-one"></div>
        `
    }
    const servicesContainerTemplate = `
    <div class="service-price-card-${cardColorNumber}" style="list-style: none; margin-bottom: 40px;">
        <span class="price-heading" style="font-size: 18px">${title}</span>
        <br></br>
                <div class="price-values">
                    <p class="price-sign">£</p>
                <p class="actual-price">${pricing?.pricingWhole}</p>
                <div class="discount-stick-wrapper">
                ${oldPrice}
            </div>
        </div>

        <br></br>
        ${serviceList}
        <a href="../../checkout/?category=network&params=${title?.toLowerCase()}" class="service-price-button-${cardColorNumber} w-button">Proceed</a>
    </div>
    `;

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

    console.log(serviceList);
    serviceGroup = "";
    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i]);

        serviceGroup += `
            <div class="price-list">
                <p class="${cardColorNumber}"></p>
                <p class="price-offer-text" style="font-size: 16px">${serviceList[i]}</p>
            </div>`;
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
