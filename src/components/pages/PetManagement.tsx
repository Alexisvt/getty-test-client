import React from 'react';

import { IPet } from '../../store/actions/pets.types';

interface PetManagementProps {
  pets: IPet[];
}

class PetManagement extends React.Component<PetManagementProps> {
  public render() {
    return <div>This is the Pet Management</div>;
  }
}

export default PetManagement;
