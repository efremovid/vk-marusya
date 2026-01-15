import type { Meta, StoryObj } from '@storybook/react'
import { BaseInput } from './BaseInput'

const meta: Meta<typeof BaseInput> = {
  title: 'Shared/UI/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    isDisabled: {
      control: 'boolean',
    },
    isError: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
  args: {
    placeholder: 'Введите текст',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Неактивное поле',
    isDisabled: true,
  },
}

export const ErrorState: Story = {
  args: {
    placeholder: 'Ошибочное поле',
    isError: true,
    defaultErrorValue: 'Некорректное значение',
  },
}

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
  },
}

export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'Введите email',
  },
}

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: 'Введите число',
  },
}

export const WithCustomClass: Story = {
  args: {
    placeholder: 'С кастомным классом',
    className: 'custom-class',
  },
}
