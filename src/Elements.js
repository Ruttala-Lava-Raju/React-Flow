const apiCallResponseData = {
    "id": "prmtg0531dAyUHBkE0h7",
    "source": {
      "id": "otytfzsylagYx8OiQ0h7",
      "name": "location",
      "type": "user",
      "_links": {
        "self": {
          "href": "https://venuokta.oktapreview.com/api/v1/meta/types/user/otytfzsylagYx8OiQ0h7"
        },
        "schema": {
          "href": "https://venuokta.oktapreview.com/api/v1/meta/schemas/user/osctfzsylagYx8OiQ0h7"
        }
      }
    },
    "target": {
      "id": "0oajjchkhpHHpkHum0h7",
      "name": "salesforce",
      "type": "appuser",
      "_links": {
        "self": {
          "href": "https://venuokta.oktapreview.com/api/v1/apps/0oajjchkhpHHpkHum0h7"
        },
        "schema": {
          "href": "https://venuokta.oktapreview.com/api/v1/meta/schemas/apps/0oajjchkhpHHpkHum0h7/default"
        }
      }
    },
    "properties": {
      "firstName": {
        "expression": "user.firstName",
        "pushStatus": "DONT_PUSH"
      },
      "lastName": {
        "expression": "user.lastName",
        "pushStatus": "DONT_PUSH"
      },
      "email": {
        "expression": "user.email",
        "pushStatus": "DONT_PUSH"
      },
	  "Phone-Number": {
        "expression": "user.phoneNumber",
        "pushStatus": "DONT_PUSH"
      },
	  "password": {
        "expression": "user.password",
        "pushStatus": "DONT_PUSH"
      }
    },
    "_links": {
      "self": {
        "href": "https://venuokta.oktapreview.com/api/v1/mappings/prmtg0531dAyUHBkE0h7"
      }
    }
  };

	const data = apiCallResponseData.properties;
	const displayNames = Object.keys(data);
	console.log(displayNames.length);
	const sourceTargetPosition = {source: "right", target: "left" };
	const edgeType = "straight";
	let id = 0;
	const getNodeId = () => `node-${(id++).toString()}`;
	export function getElements() 
	{
		const initialElements = [];
		console.log(sourceTargetPosition);
		for (let displayNamesIndex = 0; displayNamesIndex < displayNames.length; displayNamesIndex++) 
		{
			const sourcePosition = {
			x: 100,
			y: 100 * (displayNamesIndex + 1),
			};
			
			const targetPosition = {
			x: 500,
			y: 100 * (displayNamesIndex + 1),
			};
			
			const sourceId = getNodeId();
			const okatFieldName = displayNames[displayNamesIndex];
			const sourceData = { label:  data[okatFieldName].expression};

			const sourceNode = {
			id: sourceId,
			type: "input",
			data: sourceData,
			position: sourcePosition,
			sourcePosition: sourceTargetPosition.source,
			};

			const targetId = getNodeId();
			const targetData = { label: displayNames[displayNamesIndex] };

			const targetNode = {
			id: targetId,
			type: "output",
			data: targetData,
			position: targetPosition,
			targetPosition: sourceTargetPosition.target,
			};

			initialElements.push(sourceNode);
			initialElements.push(targetNode);

			initialElements.push({
			id: `${sourceId}-${targetId}`,
			source: sourceId,
			target: targetId,
			animated: true,
			type: edgeType,
			arrowHeadType: 'arrowclosed',
			});
		}
	  return initialElements;
	}