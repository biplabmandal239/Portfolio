import { Dispatch, SetStateAction } from 'react';
import { ProjectCategory, ProjectModalState } from '../../types/portfolio';

export type ProjectFilter = 'all' | ProjectCategory;

export interface ProjectsProps {
  openModal: ProjectModalState;
  setOpenModal: Dispatch<SetStateAction<ProjectModalState>>;
}

export interface ToggleButtonProps {
  $active?: boolean;
}
