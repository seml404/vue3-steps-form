export namespace StepNames {
  export enum StepNamesEng {
    /**
     * Личные данные
     */
    PERSONAL_DATA = 'personal-data',
    /**
     * Паспорт
     */
    PASPORT = 'pasport',
    /**
     * Подтверждение удаленной идентификации
     */
    CONFIRMATION = 'confirmation',
    /**
     *Условия
     */
    TERMS = 'terms',
    /**
     * Подписание договора
     */
    SIGNING = 'signing',
    /**
     * Проверка данных
     */
    VALIDATION = 'validation',
    /**
     * Договор подписан
     */
    SIGNED = 'signed'
  }

  export const StepNamesRus: Record<string, string> = {
    [StepNamesEng.PERSONAL_DATA]: 'Личные данные',
    [StepNamesEng.PASPORT]: 'Паспорт',
    [StepNamesEng.CONFIRMATION]: 'Подтверждение удаленной идентификации',
    [StepNamesEng.TERMS]: 'Условия',
    [StepNamesEng.SIGNING]: 'Подписание договора',
    [StepNamesEng.VALIDATION]: 'Проверка данных',
    [StepNamesEng.SIGNED]: 'Договор подписан'
  }
}
