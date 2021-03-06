const messages = {
  after: (field, [target]) => `${field} moet later zijn dan ${target}.`,
  alpha_dash: (field) => `${field} mag alleen letters, nummers, en strepen bevatten.`,
  alpha_num: (field) => `${field} mag alleen letters en nummers bevatten.`,
  alpha: (field) => `${field} mag alleen letters bevatten.`,
  before: (field, [target]) => `${field} moet eerder zijn dan ${target}.`,
  between: (field, [min, max]) => `${field} moet tussen ${min} en ${max} liggen.`,
  confirmed: (field, [confirmedField]) => `${field} komt niet overeen met ${confirmedField}.`,
  date_between: (field, [min, max]) => `${field} moet tussen ${min} en ${max} liggen.`,
  date_format: (field, [format]) => `${field} moet in het volgende formaat zijn: ${format}.`,
  decimal: (field, [decimals] = ['*']) => `${field} moet een nummer zijn en mag ${decimals === '*' ? '' : decimals} decimalen bevatten.`,
  digits: (field, [length]) => `${field} moet een nummer zijn en exact ${length} tekens bevatten.`,
  dimensions: (field, [width, height]) => `${field} moet ${width} pixels breed zijn en ${height} pixels hoog.`,
  email: (field) => `${field} moet een geldig emailadres zijn`,
  ext: (field) => `${field} moet een geldig bestand zijn.`,
  image: (field) => `${field} moet een afbeelding zijn.`,
  in: (field) => `${field} moet een geldige waarde zijn.`,
  ip: (field) => `${field} moet een geldig ip adres zijn.`,
  max: (field, [length]) => `${field} mag niet groter zijn dan ${length} karakters.`,
  mimes: (field) => `${field} moet een geldig bestandstype hebben.`,
  min: (field, [length]) => `${field} moet minimaal ${length} karakaters zijn.`,
  not_in: (field) => `${field} is ongeldig.`,
  numeric: (field) => `${field} mag alleen nummers bevatten`,
  regex: (field) => `${field} formaat is ongeldig.`,
  required: (field) => `${field} is verplicht.`,
  size: (field, [size]) => `${field} moet minstens ${size} KB groot zijn.`,
  url: (field) => `${field} is geen geldige URL.`
};

const locale = {
  name: 'nl',
  messages,
  attributes: {}
};

if (typeof VeeValidate !== 'undefined' && VeeValidate && typeof VeeValidate.Validator) {
  VeeValidate.Validator.addLocale(locale);
}

export default locale;
