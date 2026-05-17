import { Dispatch, SetStateAction } from 'react';
import { ProjectItem, ProjectModalState } from '../../../types/portfolio';

export interface ProjectCardProps {
  project: ProjectItem;
  setOpenModal: Dispatch<SetStateAction<ProjectModalState>>;
}
