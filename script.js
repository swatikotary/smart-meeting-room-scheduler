let meetings = [];
const hourWidth = 40;

window.onload = () => {
    const s = document.getElementById('sH');
    const e = document.getElementById('eH');

    for(let i=1; i<=12; i++) {
        s.add(new Option(i, i));
        e.add(new Option(i, i));
    }

    initTimeline();
};

function initTimeline() {
    const tl = document.getElementById('timeline');
    tl.innerHTML = "";

    for(let i=0; i<=24; i++) {
        let div = document.createElement('div');
        div.className = 'hour-marker';
        div.style.left = (i * hourWidth) + 'px';
        div.innerText = i + ":00";
        tl.appendChild(div);
    }
}

function to24h(h, p) {
    h = parseInt(h);
    if(p === "PM" && h !== 12) h += 12;
    if(p === "AM" && h === 12) h = 0;
    return h;
}

function addMeeting() {
    const name = document.getElementById('name').value;
    const start = to24h(sH.value, sP.value);
    const end = to24h(eH.value, eP.value);

    if(!name || start >= end) {
        alert("Invalid input");
        return;
    }

    meetings.push({ id: Date.now(), name, start, end });
    renderTable();
}

function renderTable() {
    tableBody.innerHTML = meetings.map(m => `
        <tr>
            <td>${m.name}</td>
            <td>${m.start}:00 - ${m.end}:00</td>
            <td><button onclick="removeMeeting(${m.id})">✕</button></td>
        </tr>
    `).join('');
}

function removeMeeting(id) {
    meetings = meetings.filter(m => m.id !== id);
    renderTable();
}

function processSchedule() {
    let sorted = [...meetings].sort((a,b) => a.end - b.end);
    let selected = [], rejected = [], lastEnd = -1;

    sorted.forEach(m => {
        if(m.start >= lastEnd) {
            selected.push(m);
            lastEnd = m.end;
        } else {
            rejected.push(m);
        }
    });

    selList.innerHTML = selected.map(m => `<li>${m.name}</li>`).join('');
    rejList.innerHTML = rejected.map(m => `<li>${m.name}</li>`).join('');

    initTimeline();
    const tl = document.getElementById('timeline');

    selected.forEach(m => drawBar(m, tl, getColor('--success'), 20));
    rejected.forEach(m => drawBar(m, tl, getColor('--danger'), 65));
}

function drawBar(m, container, color, top) {
    let bar = document.createElement('div');
    bar.className = 'gantt-bar';
    bar.style.left = (m.start * hourWidth) + 'px';
    bar.style.width = ((m.end - m.start) * hourWidth) + 'px';
    bar.style.background = color;
    bar.style.top = top + 'px';
    bar.innerText = m.name;
    container.appendChild(bar);
}

function getColor(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName);
}