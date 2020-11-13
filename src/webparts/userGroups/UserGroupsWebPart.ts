import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "UserGroupsWebPartStrings";
import UserGroups from "./components/UserGroups";
import { IUserGroupsProps } from "./components/IUserGroupsProps";
import { SPHttpClient } from "@microsoft/sp-http";

export interface IUserGroupsWebPartProps {
  description: string;
 // userGroups: [];
}

export default class UserGroupsWebPart extends BaseClientSideWebPart<
  IUserGroupsWebPartProps
> {
  public state = {
    userGroupsArray: []
  }
  public async render(): Promise<void> {
    var siteGroupsData = await this.context.spHttpClient.get(
      this.context.pageContext.site.absoluteUrl +
        "/_api/web/currentuser/groups",
      SPHttpClient.configurations.v1
    );

    siteGroupsData.json().then((d) => {
     var  siteGroups = d.value;
      siteGroups.forEach((siteGroup) => {
        console.log("SITE GROUP DATA", siteGroup.Title);
        this.state.userGroupsArray.push(siteGroup.Title);
        return (siteGroup.Title);
      });
    });

    const element: React.ReactElement<IUserGroupsProps> = React.createElement(
      UserGroups,
      {
        description: this.properties.description
        //userGroup : this.state.userGroupsArray
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
