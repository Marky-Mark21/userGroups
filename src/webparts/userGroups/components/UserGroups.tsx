import * as React from 'react';
import styles from './UserGroups.module.scss';
import { IUserGroupsProps } from './IUserGroupsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Component1 from './Component1';
import Component2 from './Component2';
import { IUserGroupsWebPartProps } from '../UserGroupsWebPart';



export default class UserGroups extends React.Component<IUserGroupsProps, {}> {
  public render(): React.ReactElement<IUserGroupsProps> {
    return (
      <div className={ styles.userGroups }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
    <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <div className={styles.row}>
        <Component1 />
        </div>
        <br></br>
        <div className={styles.row}>
        <Component2/>
        
        </div>
      </div>
    );
  }
}
