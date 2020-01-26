import ComponentEdit from "../../components/Admin/ComponentEdit/ComponentEdit";
import React from "react";
import InputBlock from "../../components/Admin/ComponentEdit/SidebarBlock/InputBlock";
import TextareaBlock from "../../components/Admin/ComponentEdit/SidebarBlock/TextareaBlock";

const AnyComponent = (props) => {
  const propss = Object.values(props);
  const renderProps = () => propss.map((prop, index) => <p key={index}>{prop}</p>)

  return <div>
    { renderProps() }
  </div>;
};

export const componentSpecificGenerator = ({ entity, component, handlers }) => () => {
  console.log(handlers);

  return <ComponentEdit entity={entity} component={component}>
    {handlers}
  </ComponentEdit>
};

export const specificComponentRoutes = [
  {
    entity: 'News', component: AnyComponent, handlers: [
      <InputBlock title={'Bild-url'} responsibility={'imgUrl'}/>,
      <InputBlock title={'Titel'} responsibility={'title'}/>,
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ]
  },
  {
    entity: 'Slides', component: AnyComponent, handlers: [
      <InputBlock title={'Bild-url'} responsibility={'imgUrl'}/>,
      <InputBlock title={'Titel'} responsibility={'title'}/>,
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'Intro', component: AnyComponent, handlers: [
      <InputBlock title={'Titel'} responsibility={'title'}/>,
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'Benefits', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'InsuranceStaff', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'InspectionsStaff', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'InsuranceHowTo', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'Goals', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'Statues', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'Board', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'Officials', component: AnyComponent, handlers: [
      <TextareaBlock title={'Text'} responsibility={'text'}/>,
    ],
  },
  {
    entity: 'Contact', component: AnyComponent, handlers: [
      <InputBlock title={'Titel'} responsibility={'title'}/>,
      <InputBlock title={'CO'} responsibility={'co'}/>,
      <InputBlock title={'Adress'} responsibility={'street'}/>,
      <InputBlock title={'ZIP'} responsibility={'zip'}/>,
      <InputBlock title={'City'} responsibility={'city'}/>,
      <InputBlock title={'Bank-giro'} responsibility={'bg'}/>,
    ],
  }
];

const ComponentOverviewComps = specificComponentRoutes.reduce((acc, curr) => ({ ...acc, [`${curr.entity}Specific`]: componentSpecificGenerator(curr) }), {});

console.log('ComponentOverviewComps', ComponentOverviewComps);
export default ComponentOverviewComps;
