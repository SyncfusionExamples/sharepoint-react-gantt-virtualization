import * as React from 'react';
import type { IAppProps } from './IAppProps';

import {
  GanttComponent,
  Inject,
  Selection,
  VirtualScroll,
  ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-gantt';

import { SPComponentLoader } from '@microsoft/sp-loader';
// Import Syncfusion CSS
//require('@syncfusion/ej2-tailwind3-theme/styles/schedule/index.css');

 
// SPFx's css-loader can't resolve the @import chains inside the Syncfusion theme CSS,
// so load it from the CDN at runtime instead of bundling it through webpack.
SPComponentLoader.loadCss('https://cdn.syncfusion.com/ej2/35.1.37/bootstrap5.css');


const generateData = () => {
  const data: any[] = [];

  let taskId = 1;

  for (let i = 1; i <= 107; i++) {

    data.push({
      TaskID: taskId,
      TaskName: `Project ${i}`,
      StartDate: new Date('2026-04-01'),
      Duration: 10
    });

    const parentId = taskId;
    taskId++;

    for (let j = 1; j <= 5; j++) {
      data.push({
        TaskID: taskId,
        TaskName: `Task ${i}-${j}`,
        StartDate: new Date('2026-04-01'),
        Duration: j + 1,
        Progress: (j * 20) % 100,
        parentID: parentId
      });

      taskId++;
    }
  }

  return data;
};

export default class Appcopy extends React.Component<IAppProps> {

  public render(): React.ReactElement<IAppProps> {

    const data = generateData();

    const taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'parentID'
    };

    return (
      <GanttComponent
        id="Gantt"
        dataSource={data}
        taskFields={taskFields}
        enableVirtualization={true}
        height="600px"
        rowHeight={46}
        taskbarHeight={25}
        treeColumnIndex={1}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="100" />
          <ColumnDirective field="TaskName" width="250" />
          <ColumnDirective field="StartDate" />
          <ColumnDirective field="Duration" />
          <ColumnDirective field="Progress" />
        </ColumnsDirective>

        <Inject services={[Selection, VirtualScroll]} />
      </GanttComponent>
    );
  }
}

