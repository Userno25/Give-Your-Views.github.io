document.addEventListener("DOMContentLoaded", function() {
    const sections = ["politics", "sports", "ai", "current-topics", "influencers"];
    sections.forEach(section => {
        document.getElementById(`${section}-content`).innerHTML = generateSectionContent(section);
    });
});

function generateSectionContent(section) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${capitalizeFirstLetter(section)}</h5>
                <p class="card-text">Share your views on ${section} topics.</p>
                <textarea class="form-control mb-3" rows="3" placeholder="Enter your views..."></textarea>
                <button class="btn btn-primary" onclick="submitVote('${section}')">Submit</button>
                <div class="mt-3">
                    <h6>Results:</h6>
                    <div id="${section}-results"></div>
                </div>
            </div>
        </div>
    `;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function submitVote(section) {
    const resultsDiv = document.getElementById(`${section}-results`);
    resultsDiv.innerHTML = "<p>Thank you for your vote! The results will be displayed here.</p>";
}