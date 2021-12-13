

export type FooterWidgetLinkType = {
  name: string,
  link: string,
}

export type FooterWidgetListType = {
  title: string,
  widgetList: FooterWidgetLinkType[],
}

export type FooterWidgetSingleLocationType = {
  description: string,
  button: string,
  link: string,
}

export type FooterWidgetLocationType = {
  title: string,
  locations: FooterWidgetSingleLocationType[],
}

export type FooterWidgetInfoBoxType = {
  icon:string
  title: string,
  description: string,
}

export type FooterWidgetCustomerSupportType = {
  title: string,
  info: FooterWidgetInfoBoxType[],
}

export type FooterWidgetSocialIconsType = {
  icon: string,
  link: string,
}
