import { forEach } from 'ramda'

export const toFormData = data => {
  const form = new FormData()
  forEach(data, (field, fieldName) => {
    if (typeof field === 'object' && field.length) {
      forEach(field, (value, key) => {
        form.append(`${fieldName}[${key}]`, value)
      })
    } else form.append(fieldName, field)
  })
  return form
}
