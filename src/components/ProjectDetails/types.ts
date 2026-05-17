import { Dispatch, SetStateAction } from 'react';
import { ProjectModalState } from '../../types/portfolio';

export interface ProjectDetailsProps {
  openModal: ProjectModalState;
  setOpenModal: Dispatch<SetStateAction<ProjectModalState>>;
}

export interface ButtonProps {
  $dull?: boolean;
}
