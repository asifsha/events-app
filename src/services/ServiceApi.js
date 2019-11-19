class ServiceApi {
  static getEvents() {
    //to-do: chnage this to actual API call
    const data = [
      {
        name: "Onsite Interview",
        type: "other",
        date: "December 15 - 22, 2019",
        deadline: "3-Nov-19",
        deadlinePast: true,
        past: false,
        location: "Vancouver - Canada",
        status: "Expected 50 Participants, 10 companies, 50 job positions",
        image: "images/van4.jpg",
        flag: "images/canadaflag.png",
        premium: true
      },

      {
        name: "LEAP Ontario - Job Fair",
        type: "leap",
        date: "December 10 - 13, 2019",
        deadline: "3-Nov-19",
        deadlinePast: true,
        past: false,
        location: "Vancouver - Canada",
        status: "Expected 200 Participants, 10 companies, 50 jobs positions",
        image: "images/ontario1.jpg",
        flag: "images/canadaflag.png"
      },     


      {
        name: "Hackathon Vancouver",
        type: "hackathon",
        date: "December 2 - 04, 2019",
        deadline: "30-Nov-2019",
        past: false,
        location: "Vancouver - Canada",
        status: "Expected 100 Participants, 5 companies, 20 job positions",
        image: "images/van1.jpg",
        flag: "images/canadaflag.png"
      },

      {
        name: "Leap Ontario",
        type: "leap",
        date: "February 3 - 06, 2020",
        deadline: "25-Jan-2020",
        deadlinePast: false,
        location: "Toronto - Canada",
        past: false,
        status: "Expected 200 Participants, 5 Companies, 20 Positions",
        image: "images/toronto1.jpg",
        flag: "images/canadaflag.png"
      },

      {
        name: "Leap Calgary",
        type: "leap",
        date: "February 24 - 27, 2020",
        deadline: "10-Feb-2020",
        deadlinePast: false,
        location: "Calgary - Canada",
        past: false,
        status: "Expected 200 Participants, 7 Companies, 20 Positions",
        image: "images/calgary1.jpg",
        flag: "images/canadaflag.png"
      },

      {
        name: "Colombia Mission",
        type: "mission",
        date: "March 7 - 08, 2020",
        deadline: "14-Feb-2020",
        deadlinePast: false,
        location: "Medellín - Colombia",
        past: false,
        status: "Expected 200 Participants, 8 companies, 20 Positions",
        image: "images/colombia.jpg",
        flag: "images/colombiaflag.jpg"
      },

      {
        name: "Leap MTL",
        type: "leap",
        date: "March 9 - 12, 2020",
        deadline: "01-Mar-2020",
        deadlinePast: false,
        location: "Montréal - Canada",
        past: false,
        status: "Expected 200 Participants, 5 companies, 20 Positions",
        image: "images/montreal.jpg",
        flag: "images/canadaflag.png"
      },
      {
        name: "Recruiting Mission",
        type: "mission",
        date: "February 3 - 06, 2019",
        deadline: "25-Jan-2019",
        deadlinePast: true,
        location: "São Paulo - Brazil",
        past: true,
        status: "150 Participants, 8 companies, 15 Jobs offered",
        image: "images/SaoPaulo.jpg",
        flag: "images/canadaflag.png"
      },

      {
        name: "Leap Vancouver",
        type: "leap",
        date: "March 30 - April 2, 2020",
        deadline: "08-Mar-2020",
        deadlinePast: false,
        location: "Vancouver - Canada",
        past: false,
        status: "Expected 200 Participants, 5 companies, 20 Positions",
        image: "images/van3.jpg",
        flag: "images/canadaflag.png"
      },

      {
        name: "Relocation Summit 2019",
        type: "leap",
        date: "November 27 - 30, 2019",
        deadline: "26-Nov-2020",
        deadlinePast: false,
        location: "Winnipeg - Canada",
        past: false,
        status: "Expected 200 Participants, 5 companies, 20 jobs positions",
        image: "images/winnipeg.jpg",
        flag: "images/canadaflag.png"
      },

      {
        name: "Leap Toronto",
        type: "leap",
        date: "April 3 - 06, 2019",
        deadline: "15-Mar-2019",
        deadlinePast: true,
        location: "Toronto - Canada",
        past: true,
        status: "200 Participants, 5 companies, 20 jobs offered",
        image: "images/toronto3.jpg",
        flag: "images/canadaflag.png",
        premium: true
      },

      {
        name: "Interview Preparation Class",
        type: "other",
        date: "April 3, 2019",
        deadline: "",
        deadlinePast: false,
        location: "Online",
        past: false,
        status: "Expected 200 Participants, 1 Hour Training Session",
        image: "images/online.jpg",
        premium: true
      },

      {
        name: "Language Preparation Class",
        type: "other",
        date: "February 3",
        deadline: "",
        deadlinePast: false,
        location: "Online",
        past: false,
        status: "Expected 50 Participants, 1 Hour Traning Session",
        image: "images/online.jpg",
        premium: true
      },

      {
        name: "Interview Practice Session",
        type: "other",
        date: "November 27",
        deadline: "",
        deadlinePast: false,
        location: "Online",
        past: false,
        status: "Expected 50 Participants, 1 Hour Traning Session",
        image: "images/online.jpg",
        premium: true
      }
    ];

    //to Simulate actual delay in response from actual API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  }
}

export default ServiceApi;
