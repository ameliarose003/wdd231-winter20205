const data = {
    courseName: "Frontend Web Development 1",
    topics: [
      {
        topicName: "HTML",
        subTopics: [
          { subTopicName: "Tags", inClass: true },
          { subTopicName: "Attributes", inClass: false },
          { subTopicName: "Attributes", inClass: false },
        ],
      },
      {
        topicName: "CSS",
        subTopics: [
          { subTopicName: "Selectors", inClass: false },
          { subTopicName: "Properties", inClass: true },
          { subTopicName: "Pseudo Classes", inClass: true },
          null,
        ],
      },
      null,
    ],
  };
  
  function getInClassSubtopic() {
    let foundSubTopic = data.find(function(subTopics) {
        if (subTopics === "Selectors")
            return subTopics
    })
  }
  console.log(getInClassSubtopic);