import React from 'react';
import ReactFlow, {MiniMap, Controls, Background} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css';
import 'react-flow-renderer/dist/theme-default.css';
const rawData = {
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
      }
    },
    "_links": {
      "self": {
        "href": "https://venuokta.oktapreview.com/api/v1/mappings/prmtg0531dAyUHBkE0h7"
      }
    }
  };
const data = rawData.properties;
const displayName = Object.keys(data);
const arrowHeadType = "arrowclosed";

const elements = [{
            id: '1A',
            type: 'input',
            data: { label: data.firstName.expression },
            position: { x: 100, y: 100 },
            sourcePosition: 'right',
        },
        {
            id: '1B',
            type: 'output',
            data: {label: displayName[0]},
            position: { x: 500, y: 100 },
            targetPosition: 'left',
            },
            {
                id: '2A',
                type: 'input',
                data: { label: data.lastName.expression },
                sourcePosition: 'right',
                position: { x: 100, y: 200 },
            },
            {
                id: "2B",
                type: 'output',
                data: { label: displayName[1]},
                targetPosition: 'left',
                position: { x: 500, y: 200 },
            },
            {
                id: '3A',
                type: 'input',
                data: { label: data.email.expression },
                sourcePosition: 'right',
                position: { x: 100, y: 300 },
            },
            {
                id:'3B',
                type: 'output',
                data: {label: displayName[2]},
                targetPosition: 'left',
                position: {x: 500, y: 300},
            },
            { 
                id: '1A-B', 
                source: '1A', 
                target: '1B', 
                type: 'straight', 
                animated: true,
                arrowHeadType: arrowHeadType, 
            },
            { 
                id: '2A-B', 
                source: '2A', 
                target: '2B', 
                type: 'straight', 
                animated: true, 
                arrowHeadType: arrowHeadType, 
            },
            { 
                id: '3A-B', 
                source: '3A', 
                target: '3B', 
                animated: true,
                type: 'straight', 
                arrowHeadType: arrowHeadType, 
            },
        ];

        export default function App() {
            return ( 
            <div style = {{ height: 600, width: 1300, align: 'center' }} >
                <ReactFlow elements = { elements }>
                    <Background variant="dots"
                    color="black"
                    gap={12}
                    size={0.9}
                    />
                    <Controls/>
                    <MiniMap/>
                </ReactFlow> 
            </div >
            );
        }