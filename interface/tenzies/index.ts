export interface IDice {
  id: number;
  value: number;
  isActive: boolean;
}

export interface IGameStatistics {
  isGameCompleted: boolean;
  countSame: number;
  selectedVal: number;
  buttonText: 'Roll' | 'Reset';
}