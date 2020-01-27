import ComponentOverview from "../../components/Admin/ComponentOverview";
import * as EntitiesRoutes from "../../constants/entitiesConstants";
import {NEWS, BENEFITS, SLIDES, GOALS, STATUES, GALLERY_EVENTS} from "../../constants/entitiesConstants";
import React from "react";
import NewsCard from "../../components/NewsCard/NewsCard";

const AnyComponent = (props) => {
  const propss = Object.values(props);
  const renderProps = () => propss.map((prop, index) => <p key={index}>{prop}</p>)

  return <div>
    { renderProps() }
  </div>;
};
const componentOverviewGenerator = ({ entity, component }) => () => <ComponentOverview entity={entity} title={entity} component={component} />;

const overviewComponentRoutes = [
  { entity: NEWS, component: NewsCard },
  { entity: BENEFITS, component: AnyComponent },
  { entity: SLIDES, component: AnyComponent },
  { entity: GOALS, component: AnyComponent },
  { entity: STATUES, component: AnyComponent },
  { entity: GALLERY_EVENTS, component: AnyComponent },
];

const ComponentOverviewComps = overviewComponentRoutes.reduce((acc, curr) => ({ ...acc, [curr.entity]: componentOverviewGenerator(curr) }), {});
export default ComponentOverviewComps;
