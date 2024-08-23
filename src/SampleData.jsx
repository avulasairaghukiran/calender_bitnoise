
const mockedSchedulerData= [
  {
    // Id fo the resource
    "id": "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    "label": {
      // icon for the resource
      "icon": "https://picsum.photos/24?random=1",
      // title for the Resource
      "title": "Joe Doe",
      // Subtitle for the Resource
      "subtitle": "Technician"
    },
    "data": [
      {
        // Id for the Job
        "id": "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        // Start date for the job
        "startDate": "2024-08-01T09:00:00.000Z",
        // End date of the Job
        "endDate": "2024-08-15T17:00:00.000Z",
        // Ocupancy is n Sec
        "occupancy": 3600,
        // title of the job  
        "title": "Project A - Job",
        // subtitle of the job
        "subtitle": "Service Job 1",
        // Description fo the job
        "description": "Array indexing Salad West Account",
        // bg color of the job
        "bgColor": "rgb(19,126,217)"
      },
      {
        // Id for the Job
        "id": "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        // Start date for the job
        "startDate": "2024-08-01T09:00:00.000Z",
        // End date of the Job
        "endDate": "2024-08-15T17:00:00.000Z",
        // Ocupancy is n Sec
        "occupancy": 4800,
        // title of the job  
        "title": "Project A - Job",
        // subtitle of the job
        "subtitle": "Service Job 1",
        // Description fo the job
        "description": "Array indexing Salad West Account",
        // bg color of the job
               "bgColor": "rgb(19,126,217)"
      }
    ]
  },
  {
    "id": "5e9b22e0-8a2d-4b40-9c3f-8727b29a4b9a",
    "label": {
      "icon": "https://picsum.photos/24?random=2",
      "title": "Alice Smith",
      "subtitle": "Developer"
    },
    "data": [
      {
        "id": "c4a882f2-fbde-40e5-9b83-2e870f0ed43e",
        "startDate": "2024-08-01T10:00:00.000Z",
        "endDate": "2024-08-10T16:00:00.000Z",
        "occupancy": 3200,
        "title": "Project X - Job",
        "subtitle": "Service Job 1",
        "description": "Enhancing User Experience",
        "bgColor": "rgb(19,126,217)"
      }
    ]
  },
  {
    "id": "1a2b3c4d-5678-90ef-gh12-3456ijklmnop",
    "label": {
      "icon": "https://picsum.photos/24?random=3",
      "title": "Bob Johnson",
      "subtitle": "Analyst"
    },
    "data": [
      {
        "id": "ab12cd34-ef56-78gh-90ij-klmn1234opqr",
        "startDate": "2024-08-05T08:00:00.000Z",
        "endDate": "2024-08-20T17:00:00.000Z",
        "occupancy": 3400,
        "title": "Project M - Job",
        "subtitle": "Service Job 1",
        "description": "Data Analysis and Reporting",
        "bgColor": "rgb(19,126,217)"
      }
    ]
  },
  {
    "id": "2345abcd-6789-01ef-2345-6789abcdef01",
    "label": {
      "icon": "https://picsum.photos/24?random=4",
      "title": "Carol White",
      "subtitle": "Manager"
    },
    "data": [
      {
        "id": "ef56gh78-90ij-klmn-opqr-stuvwx12yz34",
        "startDate": "2024-08-02T07:00:00.000Z",
        "endDate": "2024-08-15T16:00:00.000Z",
        "occupancy": 5000,
        "title": "Project Q - Job",
        "subtitle": "Service Job 1",
        "description": "Project Management and Oversight",
        "bgColor": "rgb(19,126,217)"
      }
    ]
  },
  {
    "id": "3456abcd-7890-12ef-3456-7890abcdef12",
    "label": {
      "title": "David Lee",
    },
    "data": [
      {
        "id": "ij90klmn-opqr-stuv-wx12-yz34abcd5678",
        "startDate": "2024-08-03T10:00:00.000Z",
        "endDate": "2024-08-15T14:00:00.000Z",
        "occupancy": 3600,
        "title": "Project S - Job",
      }
    ]
  }
]
const serviceJobs=[
  {
     id: "91ccf1f2-eeaa-ee11-a568-002248b2149f",
   endDate:"26 04 2024 16:19",
   jobTitle: "Test04-01",
   startDate: "01 04 2024 16:19",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "9f7b6917-3360-ef11-bfe4-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "TEST SK",
   startDate: "08 22 2024 08:33",
   Resource: "Sumit Kumar"
  },
  {
     id: "5808e340-8855-ef11-bfe3-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Service Job 5",
   startDate: "08 08 2024 18:44",
   Resource: "Rohit Ramawat"
  },
  {
     id: "7829b192-7e55-ef11-bfe3-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Service Job 4",
   startDate: "08 08 2024 17:32",
   Resource: "Rohit Ramawat"
  },
  {
     id: "6fcac856-7d55-ef11-bfe3-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Service Job 3",
   startDate: "08 08 2024 17:26",
   Resource: "Rohit Ramawat"
  },
  {
     id: "66b66933-6e55-ef11-bfe3-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Service Job 2",
   startDate: "08 08 2024 15:37",
    endDate: "08 08 2024 16:00",
   Resource: "Rohit Ramawat"
  },
  {
     id: "3b82c3dc-7c92-ee11-be37-000d3af39f3f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Service Job",
   startDate: "12 04 2023 13:41",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "49737877-6c55-ef11-bfe3-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Service Job",
   startDate: "08 08 2024 15:25",
   Resource: "Rohit Ramawat"
  },
  {
     id: "abe66743-6034-ef11-a316-000d3ae8ce7f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test obs",
   startDate: "06 27 2024 14:05",
   Resource: "Prexa 365 Team"
  },
  {
     id: "173aecc4-5f34-ef11-a316-000d3ae8ce7f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Job 4",
   startDate: "06 27 2024 14:02",
   Resource: "Prexa 365 Team"
  },
  {
     id: "993be961-5c34-ef11-a316-000d3ae8ce7f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test job 2",
   startDate: "06 27 2024 13:38",
   Resource: "Prexa 365 Team"
  },
  {
     id: "d2d1e95b-5c34-ef11-a316-000d3ae8ce7f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test job 1",
   startDate: "06 27 2024 13:37",
   Resource: "Prexa 365 Team"
  },
  {
     id: "e6625837-6034-ef11-a316-000d3ae8ce7f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test Job",
   startDate: "06 27 2024 14:05",
   Resource: "Prexa 365 Team"
  },
  {
     id: "92516d10-1ee7-ed11-a7c6-000d3af39f3f",
   jobTitle: "test job",
   startDate: "04 24 2023 11:42",
    endDate: "04 25 2023 08:00",
   Resource: "Pratik Telaviya"
  },
  {
     id: "56d16171-60a9-ee11-a568-6045bd61cd59",
   jobTitle: "Test Job",
   startDate: "01 02 2024 16:46",
    endDate: "01 10 2024 08:00",
   Resource: "Pratik Telaviya"
  },
  {
     id: "29ee47f9-cb5f-ef11-bfe4-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "Test By SK",
   startDate: "08 21 2024 20:15",
   Resource: "Sumit Kumar"
  },
  {
     id: "2d6a6fc3-2d1b-ee11-8f6d-000d3ae868a5",
   jobTitle: "Test",
   startDate: "07 05 2023 17:46",
    endDate: "07 05 2023 18:00",
   Resource: "Pratik Telaviya"
  },
  {
     id: "b66da832-65e6-ed11-a7c6-000d3af39f3f",
      jobTitle: "test",
   startDate: "04 29 2023 13:39",
    endDate: "05 03 2023 08:00",
   Resource: "Pratik Telaviya"
  },
  {
     id: "354c4ebf-482d-ee11-bdf4-000d3af39f3f",
   jobTitle: "test",
   startDate: "07 28 2023 18:43",
    endDate: "07 29 2023 18:30",
   Resource: "Pratik Telaviya"
  },
  {
     id: "ac8e0c50-7e96-ee11-be37-000d3af39f3f",
   jobTitle: "test",
   startDate: "12 09 2023 16:02",
    endDate: "12 14 2023 08:00",
   Resource: "Shahnaz Bano"
  },
  {
     id: "476c13ac-5a56-ef11-bfe3-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "TEst",
   startDate: "08 09 2024 19:51",
   Resource: "Prexa 365 Team"
  },
  {
     id: "647a5a7d-fcaa-ee11-a568-002248b2149f",
      endDate:"26 04 2024 16:19",
   jobTitle: "test",
   startDate: "01 04 2024 17:56",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "6693f70c-00ab-ee11-a568-6045bd5f4702",
      endDate:"26 04 2024 16:19",
   jobTitle: "test",
   startDate: "01 04 2024 18:21",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "44ff0aa9-8f58-ef11-bfe3-000d3a0c7785",
      endDate:"26 04 2024 16:19",
   jobTitle: "Service Job 12",
   startDate: "08 12 2024 15:15",
   Resource: "Pratik Telaviya"
  },
  {
     id: "25a538c1-fa05-ef11-9f89-002248b01ba2",
   jobTitle: "Service job",
   startDate: "04 29 2024 13:02",
    endDate: "05 30 2024 08:00",
   Resource: "Pratik Telaviya"
  },
  {
     id: "683a189b-de5e-ef11-bfe4-0022483bba10",
      endDate:"26 04 2024 16:19",
   jobTitle: "rtfgbfd",
   startDate: "08 20 2024 15:55",
   Resource: "Pratik Telaviya"
  },
  {
     id: "87551067-b4ab-ee11-a568-6045bd61c527",
      endDate:"26 04 2024 16:19",
   jobTitle: "RJ",
   startDate: "01 05 2024 15:52",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "42380505-34cf-ee11-904c-002248b0bd68",
      endDate:"26 04 2024 16:19",
   jobTitle: "oli change",
   startDate: "02 19 2024 20:04",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "a1df5afa-f3aa-ee11-a568-002248b2149f",
      endDate:"26 04 2024 16:19",
   jobTitle: "juih",
   startDate: "01 04 2024 16:55",
   Resource: "Pratik Telaviya"
  },
  {
     id: "08afa2bb-6134-ef11-a316-000d3ae8ce7f",
      endDate:"26 04 2024 16:19",
   jobTitle: "JObs",
   startDate: "06 27 2024 14:16",
   Resource: "Prexa 365 Team"
  },
  {
     id: "8ed2c25a-3e02-ef11-9f89-0022483c7d03",
   jobTitle: "Job",
   startDate: "04 24 2024 18:56",
    endDate: "04 26 2024 08:00",
   Resource: "Aashim Dhawan"
  },
  {
     id: "619d295a-0fc1-ee11-9078-002248b0bd68",
      endDate:"26 04 2024 16:19",
   jobTitle: "J1",
   startDate: "02 01 2024 20:06",
   Resource: "Akhilesh Mittal"
  },
  {
     id: "cefde60e-f4aa-ee11-a568-002248b2149f",
      endDate:"26 04 2024 16:19",
   jobTitle: "hjui",
   startDate: "01 04 2024 16:56",
   Resource: "Pratik Telaviya"
  },
  {
     id: "3c126202-f4aa-ee11-a568-002248b2149f",
   jobTitle: "hiuj",
    endDate:"26 04 2024 16:19",
   startDate: "01 04 2024 16:55",
   Resource: "Pratik Telaviya"
  },
  {
     id: "b12ac56e-2e09-ef11-9f8a-000d3ae8eaca",
   jobTitle: "hgcy",
    endDate:"26 04 2024 16:19",
   startDate: "05 03 2024 14:50",
   Resource: "Pratik Telaviya"
  },
  {
     id: "6ecd1a2e-b358-ef11-bfe3-0022483bba10",
   jobTitle: "fdgbdf",
    endDate:"26 04 2024 16:19",
   startDate: "08 12 2024 19:29",
   Resource: "Pratik Telaviya"
  },
  {
     id: "9afa56b5-6134-ef11-a316-000d3ae8ce7f",
   jobTitle: "DSSD",
    endDate:"26 04 2024 16:19",
   startDate: "06 27 2024 14:16",
   Resource: "Prexa 365 Team"
  },
  {
     id: "2d2392cc-4593-ee11-be37-000d3af39f3f",
   jobTitle: "Cross-Test",
    endDate:"26 04 2024 16:19",
   startDate: "12 05 2023 13:40",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "d8a23799-f3aa-ee11-a568-002248b2149f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Break Repairing",
   startDate: "01 04 2024 16:52",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "76e3fb3f-f4aa-ee11-a568-002248b2149f",
   jobTitle: "Break Repairing",
   startDate: "01 04 2024 16:57",
   Resource: "Pratik Telaviya",
    endDate:"26 04 2024 16:19",
  },
  {
     id: "b3487bdc-ddab-ee11-a568-002248b2149f",
      endDate:"26 04 2024 16:19",
   jobTitle: "Break Repairing",
   startDate: "01 05 2024 20:49",
   Resource: "Pratik Telaviya"
  },
  {
     id: "36f0c473-2faa-ee11-a568-6045bd5f4702",
      endDate:"26 04 2024 16:19",
   jobTitle: "Break Repairing",
   startDate: "01 03 2024 17:28",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "2b51264e-30aa-ee11-a568-6045bd5f4702",
      endDate:"26 04 2024 16:19",
   jobTitle: "Break Repairing",
   startDate: "01 03 2024 17:34",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "fe04474a-40aa-ee11-a568-6045bd5f4702",
      endDate:"26 04 2024 16:19",
   jobTitle: "Break Repairing",
   startDate: "01 03 2024 19:29",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "cc5c2792-559e-ee11-a568-6045bd61cd59",
   jobTitle: "Break Repairing",
   startDate: "12 19 2023 15:31",
    endDate: "12 20 2023 08:00",
   Resource: "Shahnaz Bano"
  },
  {
     id: "c67271df-62a9-ee11-a568-6045bd61cd59",
   jobTitle: "Break Repairing",
   startDate: "01 02 2024 17:04",
    endDate: "01 18 2024 08:00",
   Resource: "Pratik Telaviya"
  },
  {
     id: "2cd0ebd2-34aa-ee11-a568-6045bd61cd59",
      endDate:"26 04 2024 16:19",
   jobTitle: "Break Repairing",
   startDate: "01 03 2024 18:06",
   Resource: "Rushikesh Jaiswal"
  },
  {
     id: "8732bb0a-d53d-ef11-a316-0022483e7af7",
   jobTitle: "Battery Changeasdasd",
   startDate: "07 09 2024 14:53",
    endDate: "01 31 2025 08:00",
   Resource: "Dhrumil Bhavsar"
  },
  {
     id: "e751695f-669e-ee11-a568-6045bd61cd59",
      endDate:"26 04 2024 16:19",
   jobTitle: "Battery Change",
   startDate: "12 19 2023 17:31",
   Resource: "Karan Alwa"
  }
 ]

  

  export {mockedSchedulerData,serviceJobs}