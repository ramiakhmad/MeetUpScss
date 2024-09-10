const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 35,
    category: "Health and Wellbeing",
    distance: 15,
  },
];
function displayEvents() {
  const container = document.getElementById("events-container");
  container.innerHTML = "";

  const eventTypeFilter = document.getElementById("event-type").value;
  const eventDistanceFilter = document.getElementById("event-distance").value;
  const eventCategoryFilter = document.getElementById("event-category").value;
  const searchText = document
    .getElementById("search-input")
    .value.toLowerCase();

  const filteredEvents = eventsStore.filter((event) => {
    const matchesType =
      eventTypeFilter === "all" || event.type === eventTypeFilter;
    const matchesDistance =
      eventDistanceFilter === "any" ||
      event.distance <= parseInt(eventDistanceFilter);
    const matchesCategory =
      eventCategoryFilter === "all" || event.category === eventCategoryFilter;

    const matchesSearchText =
      event.title.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText);

    return (
      matchesType && matchesDistance && matchesCategory && matchesSearchText
    );
  });

  const totalAttendees = filteredEvents.reduce(
    (total, event) => total + event.attendees,
    0
  );

  filteredEvents.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.className = "events__container__event";

    eventElement.innerHTML = `
      <img src="${event.image}" alt="${event.description}" />
      <div class="events__container__event__des">
        <p>${event.date.toLocaleString()}</p>
        <h5>${event.title}</h5>
        <p>${event.category} (${event.distance} км)</p>
      </div>
    `;
    container.appendChild(eventElement);
  });

  const totalAttendeesElement = document.createElement("div");
  totalAttendeesElement.className = "events__container__total";
  totalAttendeesElement.innerHTML = `<p>${totalAttendees} attendees</p>`;
  container.appendChild(totalAttendeesElement);
}

document.getElementById("event-type").addEventListener("change", displayEvents);
document
  .getElementById("event-distance")
  .addEventListener("change", displayEvents);
document
  .getElementById("event-category")
  .addEventListener("change", displayEvents);
document
  .getElementById("search-input")
  .addEventListener("input", displayEvents);

window.onload = displayEvents;
