// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}    
window.addEventListener("load", preloader);

// Complete resource-object that will store the dynamic content
const resourceObject = {
    solarPower: {
        headingContent: "Affordable Solar Power Solutions",
        bodyText: "<p>Solar energy has become increasingly affordable for the average homeowner. With advancements in technology and decreasing costs of solar panels, more households can now benefit from this renewable energy source. Government incentives and tax credits further reduce initial investments, making solar power an economical choice in the long run.</p><p>Modern solar solutions can be tailored to fit various budgets and energy needs, providing a sustainable and cost-effective alternative to traditional power sources. Community solar programs also allow renters and those without suitable roofs to participate in the solar revolution.</p>",
        imgUrl: "./img/img-1.jpg",
        imgAlt: "Solar panels on a residential roof"
    },
    windEnergy: {
        headingContent: "Cost-Effective Wind Energy Options",
        bodyText: "<p>Wind energy is no longer just for large corporations. Smaller, more affordable wind turbines designed for residential use are now available for homeowners with suitable properties. Community wind projects allow individuals to invest in shared wind resources, reducing individual costs while still benefiting from clean energy.</p><p>Advances in vertical axis wind turbines have made them more suitable for urban environments, providing energy solutions for city dwellers without requiring large open spaces. Government incentives and falling costs make wind energy an increasingly viable option for budget-conscious consumers.</p>",
        imgUrl: "./img/img-2.jpg",
        imgAlt: "Small-scale wind turbines in a residential area"
    },
    energyEfficiency: {
        headingContent: "Budget-Friendly Energy Efficiency Upgrades",
        bodyText: "<p>Improving energy efficiency is often the most cost-effective way to reduce energy bills and carbon footprint. Simple upgrades like LED lighting, programmable thermostats, and proper insulation can significantly reduce energy consumption with minimal investment.</p><p>Energy audits can identify specific areas for improvement in your home, allowing you to prioritize upgrades based on your budget. Many utility companies offer rebates and incentives for energy-efficient appliances and home improvements, further reducing costs and making green living accessible to everyone.</p>",
        imgUrl: "./img/img-3.jpg",
        imgAlt: "Energy efficient home with LED lighting and smart thermostat"
    }
};

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons in a NODE LIST of buttons
    const buttons = document.querySelectorAll('.solution-btn');
    
    // Get the reference to your HTML-container
    const contentContainer = document.querySelector('.content-container');
    
    // Add transition style to content container
    if (contentContainer) {
        contentContainer.style.transition = 'opacity 0.3s ease';
    }
    
    // Handle selection function
    function handleSelection(event) {
        // Remove active-button id from all buttons
        buttons.forEach(button => {
            if (button.hasAttribute('id')) {
                button.removeAttribute('id');
            }
        });
        
        // Set active-button id to clicked button
        event.target.setAttribute('id', 'active-button');
        
        // Determine which content to display
        let content;
        const buttonText = event.target.textContent;
        
        if (buttonText === 'Solar Power') {
            content = resourceObject.solarPower;
        } else if (buttonText === 'Wind Energy') {
            content = resourceObject.windEnergy;
        } else if (buttonText === 'Energy Efficiency') {
            content = resourceObject.energyEfficiency;
        }
        
        // Add fade-out effect
        contentContainer.style.opacity = '0';
        
        setTimeout(() => {
            // Update content
            contentContainer.innerHTML = `
                <h2>${content.headingContent}</h2>
                <img src="${content.imgUrl}" alt="${content.imgAlt}">
                ${content.bodyText}
            `;
            
            // Add fade-in effect
            contentContainer.style.opacity = '1';
        }, 300);
    }
    
    // Register all buttons to click event
    buttons.forEach(button => {
        button.addEventListener('click', handleSelection);
    });
});

// Get the reference to the HTML-container for dynamic content
const contentContainer = document.querySelector('.content-container');

// Handle button selection and content changes
function handleSelection(event) {
    // Remove active-button id from previously selected button
    buttons.forEach(button => {
        if (button.hasAttribute('id')) {
            button.removeAttribute('id');
        }
    });

    // Set active-button id to clicked button
    event.target.setAttribute('id', 'active-button');

    // Determine which content to display based on button clicked
    let content;
    const buttonText = event.target.textContent;

    if (buttonText === 'Solar Power') {
        content = resourceObject.solarPower;
    } else if (buttonText === 'Wind Energy') {
        content = resourceObject.windEnergy;
    } else if (buttonText === 'Energy Efficiency') {
        content = resourceObject.energyEfficiency;
    }

    // Update the content container with new content
    contentContainer.innerHTML = `
        <h1>${content.headingContent}</h1>
        <img src="${content.imgUrl}" alt="${content.imgAlt}">
        <p>${content.bodyText}</p>
    `;
}

// Register all buttons to click event
buttons.forEach(button => {
    button.addEventListener('click', handleSelection);
});