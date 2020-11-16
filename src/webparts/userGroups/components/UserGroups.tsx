import * as React from 'react';
import styles from './UserGroups.module.scss';
import { IUserGroupsProps } from './IUserGroupsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Component1 from './Component1';
import Component2 from './Component2';
// import { IUserGroupsWebPartProps } from '../UserGroupsWebPart';


export default class UserGroups extends React.Component<IUserGroupsProps, {}> {
  public render(): React.ReactElement<IUserGroupsProps> {
    debugger;
    return (
      <div className={styles.userGroups}>
        <div className={styles.container}>
          <div className={styles.row}>
            {this.props.userGroups.map(value => {
              return <div className={styles.column}>{value}</div>;
            })}
          </div>
          <br></br>
          {this.props.userGroups.toString().indexOf("Members") >= 0 ? <div className={styles.row}><Component1 /></div> : ""}
          <br></br>
          {this.props.userGroups.toString().indexOf("Owners") >= 0 ? <div className={styles.row}><Component2 /></div> : ""}
        </div>
      </div>
    );
  }
}
