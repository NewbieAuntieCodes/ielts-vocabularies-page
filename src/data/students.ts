import { StudentProfile } from '../types';

export const studentProfiles: StudentProfile[] = [
  {
    id: 'common',
    name: '公共模式',
    bandToShow: '6.5',
    notes: '默认配置，使用公共题库和范文。',
  },
  {
    id: 'peichun',
    name: '佩纯',
    bandToShow: '5.0',
    lockedBand: '5.0',
    status: 'in_class',
  },
  {
    id: 'gaoyutong',
    name: '高语桐',
    bandToShow: '5.0',
    lockedBand: '5.0',
    status: 'in_class',
  },
  {
    id: 'zhangqi',
    name: '张祺',
    bandToShow: '5.0',
    lockedBand: '5.0',
    status: 'in_class',
  },
];

const studentMap = new Map<string, StudentProfile>(studentProfiles.map((s) => [s.id, s]));

export const getStudentProfile = (id: string): StudentProfile => {
  return studentMap.get(id) ?? studentMap.get('common')!;
};

export const getStudentList = (): Pick<StudentProfile, 'id' | 'name' | 'status'>[] => {
  return studentProfiles.map(({ id, name, status }) => ({ id, name, status }));
};
