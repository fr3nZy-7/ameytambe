const jobDetails = [
    {
        title: "Product Lead",
        company: "Aqilliz Pte Ltd (Apr 2024 - Present)",
        responsibilities: [
            "Leading product strategy and development for Web3 advertising solutions",
            "Managing tech team and establishing release processes",
            "Working on GTM strategy and Google Marketplace integration",
            "Maintaining product backlog and interfacing between business and tech teams",
            "Collaborating with sales team for client demos and product documentation",
            "Working directly with clients on use cases and campaigns"
        ]
    },
    {
        title: "Lead Test Engineer",
        company: "TreasurePACK DMCC (Apr 2023 - Mar 2024)",
        responsibilities: [
            "Managed the tech team and set up release processes, test plans, and strategies",
            "Worked on GTM strategy and product listing on Google Marketplace",
            "Maintained product backlog and prioritized development efforts",
            "Served as interface between business and tech teams",
            "Collaborated with sales team for client demos and product guides",
            "Worked directly with clients on their use cases and campaigns"
        ]
    },
    {
        title: "Lead Test Engineer",
        company: "KoineArth India Pvt Ltd (Dec 2021 - Mar 2023)",
        responsibilities: [
            "Managed QA team and established QA processes, test plans, and strategies",
            "Reported directly to Chief Product Officer, gained product management exposure",
            "Built release processes that reduced project overheads significantly",
            "Tested NFT marketplace on Polygon Matic blockchain and Hyperledger Fabric supply chain apps",
            "Specialized in Web3 testing, blockchain, and smart contracts testing",
            "Created automation framework using Selenium WebDriver",
            "Performed stress testing using JMeter and k6",
            "Collaborated with sales for client demos and product documentation"
        ]
    },
    {
        title: "Senior Project Engineer",
        company: "Wipro Ltd (Dec 2015 - Dec 2021)",
        responsibilities: [
            "Analyzed business requirements and clarified technical issues",
            "Conducted manual and regression testing for investment banking applications",
            "Created functional flows and test plans for unit testing and SIT",
            "Performed comprehensive data validation across applications after releases",
            "Assisted team lead in test plan preparation, traceability matrix, and estimations",
            "Part of functional automation team writing test scripts from functional test phase",
            "Involved in multiple POCs for new automation tools (Tosca and Katalon)"
        ]
    },
    {
        title: "Project Engineer",
        company: "Wipro Ltd (Aug 2011 - Dec 2015)",
        responsibilities: [
            "Software test engineer (May 2013 - Dec 2015): Analyzed business requirements, conducted manual and regression testing, created functional flows and test plans",
            "Performed comprehensive data validation activities across applications",
            "Network support engineer (Nov 2011 - May 2013): Performed carriage testing, network assurance, and vulnerability assessment",
            "Ensured end-to-end connectivity of services",
            "Gained exposure to information security and system hardening"
        ]
    }
];

let currentJob = -1;

function showJobDetails(index) {
    if (index === currentJob) return;

    currentJob = index;
    const job = jobDetails[index];

    document.querySelectorAll('.timeline-node').forEach((node, i) => {
        if (i === index) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });

    const detailsContainer = document.getElementById('job-details');
    const title = document.getElementById('job-title');
    const company = document.getElementById('job-company');
    const responsibilities = document.getElementById('job-responsibilities');

    title.textContent = job.title;
    company.textContent = job.company;

    responsibilities.innerHTML = job.responsibilities
        .map(resp => `<li class="text-stone-600 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600">${resp}</li>`)
        .join('');
}

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.addEventListener('click', () => showJobDetails(index));
});

showJobDetails(0);

const ctx = document.getElementById('experienceChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Testing & QA', 'Product Management', 'Web3 & Blockchain', 'Automation', 'Info Security', 'Team Leadership'],
        datasets: [{
            label: 'Years of Experience',
            data: [13, 3.5, 3, 10, 4, 5],
            backgroundColor: '#2563eb',
            borderColor: '#1e40af',
            borderWidth: 1,
            borderRadius: 4
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.x + ' years';
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 15,
                grid: {
                    color: '#e7e5e4'
                },
                ticks: {
                    color: '#57534e'
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#292524',
                    font: {
                        size: 14,
                        weight: 500
                    }
                }
            }
        }
    }
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        }
    });
});

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
});

updateActiveNav();