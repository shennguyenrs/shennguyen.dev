// Models
import { TechStack } from '../../models';

// Components
import ButtonCon from './ProjectCard.ButtonCon';
import ImageCon from './ProjectCard.ImageCon';
import InfoCon from './ProjectCard.InfoCon';

type ProjectProps = {
  imgSource: string;
  link: string;
  sourcecode: string;
  header: string;
  description: string;
  details: TechStack[];
};

const ProjectCard: React.FC<ProjectProps> = ({
  imgSource,
  link,
  sourcecode,
  header,
  description,
  details,
}) => (
  <div>
    <ImageCon imgSrc={imgSource} imgAlt={header} />
    <InfoCon header={header} describe={description} arr={details} />
    <ButtonCon targetLink={link} sourceLink={sourcecode} />
  </div>
);


export default ProjectCard;
