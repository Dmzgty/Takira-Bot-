/***** Módulos *****/
const fs = require('fs-extra');

/***** Mensagens de Aguarde *****/
var mensagens = ["hm"
]

const enviar = {
  espere: mensagens[Math.floor(Math.random() * mensagens.length)],
  aguarde: 'Aguarde um momento.*',
  sucesso: '️Sucesso',
  levelon: 'Leveling ativado',
  leveloff: 'Leveling desativado',
  levelnoton: 'Leveling não está ativo..',
  levelErr: 'Erro identificado.',
error: {
  sticker: 'Falha ao converter a mídia.',
  Iink: 'Certifique-se ️se esse é o link correto.',
    erro: 'erro.'
},
msg: {
  grupo: 'Só pra grupos.',
  premium: 'Exclusivo pra premium.',
  mod: 'Específico pro meu dono.',
  banido: 'Você foi banido de me usar.' ,
  donosmt: 'Apenas o dono do bot.',
  donosmt2: 'Apenas pra dono',
  adm: 'Apenas adm.',
  Badmin: 'Preciso de ser Adm.',
  privado: 'So no pv.'
}
}

/**** Sorteio Aleatório - [ Números ] ****/
var sortear = ["NÚMERO - [ 1 ]", "NÚMERO - [ 2 ]", "NÚMERO - [ 3 ]", "NÚMERO - [ 4 ]", "NÚMERO - [ 5 ]", "NÚMERO - [ 6 ]", "NÚMERO - [ 7 ]", "NÚMERO - [ 8 ]", "NÚMERO - [ 9 ]", "NÚMERO - [ 10 ]", "NÚMERO - [ 11 ]", "NÚMERO - [ 12 ]", "NÚMERO - [ 13 ]", "NÚMERO - [ 14 ]", "NÚMERO - [ 15 ]", "NÚMERO - [ 16 ]", "NÚMERO - [ 17 ]", "NÚMERO - [ 18 ]", "NÚMERO - [ 19 ]", "NÚMERO - [ 20 ]", "NÚMERO - [ 21 ]", "NÚMERO - [ 22 ]", "NÚMERO - [ 23 ]", "NÚMERO - [ 24 ]", "NÚMERO - [ 25 ]", "NÚMERO - [ 26 ]", "NÚMERO - [ 27 ]", "NÚMERO - [ 28 ]", "NÚMERO - [ 29 ]", "NÚMERO - [ 30 ]", "NÚMERO - [ 31 ]", "NÚMERO - [ 32 ]", "NÚMERO - [ 33 ]", "NÚMERO - [ 34 ]", "NÚMERO - [ 35 ]", "NÚMERO - [ 36 ]", "NÚMERO - [ 37 ]", "NÚMERO - [ 38 ]", "NÚMERO - [ 39 ]", "NÚMERO - [ 40 ]", "NÚMERO - [ 41 ]", "NÚMERO - [ 42 ]", "NÚMERO - [ 43 ]", "NÚMERO - [ 44 ]", "NÚMERO - [ 45 ]", "NÚMERO - [ 46 ]", "NÚMERO - [ 47 ]", "NÚMERO - [ 48 ]", "NÚMERO - [ 49 ]", "NÚMERO - [ 50 ]", "NÚMERO - [ 51 ]", "NÚMERO - [ 52 ]", "NÚMERO - [ 53 ]", "NÚMERO - [ 54 ]", "NÚMERO - [ 55 ]", "NÚMERO - [ 56 ]", "NÚMERO - [ 57 ]", "NÚMERO - [ 58 ]", "NÚMERO - [ 59 ]", "NÚMERO - [ 60 ]", "NÚMERO - [ 61 ]", "NÚMERO - [ 62 ]", "NÚMERO - [ 63 ]", "NÚMERO - [ 64 ]", "NÚMERO - [ 65 ]", "NÚMERO - [ 66 ]", "NÚMERO - [ 67 ]", "NÚMERO - [ 68 ]", "NÚMERO - [ 69 ]", "NÚMERO - [ 70 ]", "NÚMERO - [ 71 ]", "NÚMERO - [ 72 ]", "NÚMERO - [ 73 ]", "NÚMERO - [ 74 ]", "NÚMERO - [ 75 ]", "NÚMERO - [ 76 ]", "NÚMERO - [ 77 ]", "NÚMERO - [ 78 ]", "NÚMERO - [ 79 ]", "NÚMERO - [ 80 ]", "NÚMERO - [ 81 ]", "NÚMERO - [ 82 ]", "NÚMERO - [ 83 ]", "NÚMERO - [ 84 ]", "NÚMERO - [ 85 ]", "NÚMERO - [ 86 ]", "NÚMERO - [ 87 ]", "NÚMERO - [ 88 ]", "NÚMERO - [ 89 ]", "NÚMERO - [ 90 ]", "NÚMERO - [ 91 ]", "NÚMERO - [ 92 ]", "NÚMERO - [ 93 ]", "NÚMERO - [ 94 ]", "NÚMERO - [ 95 ]", "NÚMERO - [ 96 ]", "NÚMERO - [ 97 ]", "NÚMERO - [ 98 ]", "NÚMERO - [ 99 ]", "NÚMERO - [ 100 ]", "NÚMERO - [ 101 ]", "NÚMERO - [ 102 ]", "NÚMERO - [ 103 ]", "NÚMERO - [ 104 ]", "NÚMERO - [ 105 ]", "NÚMERO - [ 106 ]", "NÚMERO - [ 107 ]", "NÚMERO - [ 108 ]", "NÚMERO - [ 109 ]", "NÚMERO - [ 110 ]", "NÚMERO - [ 111 ]", "NÚMERO - [ 112 ]", "NÚMERO - [ 113 ]", "NÚMERO - [ 114 ]", "NÚMERO - [ 115 ]", "NÚMERO - [ 116 ]", "NÚMERO - [ 117 ]", "NÚMERO - [ 118 ]", "NÚMERO - [ 119 ]", "NÚMERO - [ 120 ]", "NÚMERO - [ 121 ]", "NÚMERO - [ 122 ]", "NÚMERO - [ 123 ]", "NÚMERO - [ 124 ]", "NÚMERO - [ 125 ]", "NÚMERO - [ 126 ]", "NÚMERO - [ 127 ]", "NÚMERO - [ 128 ]", "NÚMERO - [ 129 ]", "NÚMERO - [ 130 ]", "NÚMERO - [ 131 ]", "NÚMERO - [ 132 ]", "NÚMERO - [ 133 ]", "NÚMERO - [ 134 ]", "NÚMERO - [ 135 ]", "NÚMERO - [ 136 ]", "NÚMERO - [ 137 ]", "NÚMERO - [ 138 ]", "NÚMERO - [ 139 ]", "NÚMERO - [ 140 ]", "NÚMERO - [ 141 ]", "NÚMERO - [ 142 ]", "NÚMERO - [ 143 ]", "NÚMERO - [ 144 ]", "NÚMERO - [ 145 ]", "NÚMERO - [ 146 ]", "NÚMERO - [ 147 ]", "NÚMERO - [ 148 ]", "NÚMERO - [ 149 ]", "NÚMERO - [ 150 ]", "NÚMERO - [ 151 ]", "NÚMERO - [ 152 ]", "NÚMERO - [ 153 ]", "NÚMERO - [ 154 ]", "NÚMERO - [ 155 ]", "NÚMERO - [ 156 ]", "NÚMERO - [ 157 ]", "NÚMERO - [ 158 ]", "NÚMERO - [ 159 ]", "NÚMERO - [ 160 ]", "NÚMERO - [ 161 ]", "NÚMERO - [ 162 ]", "NÚMERO - [ 163 ]", "NÚMERO - [ 164 ]", "NÚMERO - [ 165 ]", "NÚMERO - [ 166 ]", "NÚMERO - [ 167 ]", "NÚMERO - [ 168 ]", "NÚMERO - [ 169 ]", "NÚMERO - [ 170 ]", "NÚMERO - [ 171 ]", "NÚMERO - [ 172 ]", "NÚMERO - [ 173 ]", "NÚMERO - [ 174 ]", "NÚMERO - [ 175 ]", "NÚMERO - [ 176 ]", "NÚMERO - [ 177 ]", "NÚMERO - [ 178 ]", "NÚMERO - [ 179 ]", "NÚMERO - [ 180 ]", "NÚMERO - [ 181 ]", "NÚMERO - [ 182 ]", "NÚMERO - [ 183 ]", "NÚMERO - [ 184 ]", "NÚMERO - [ 185 ]", "NÚMERO - [ 186 ]", "NÚMERO - [ 187 ]", "NÚMERO - [ 188 ]", "NÚMERO - [ 189 ]", "NÚMERO - [ 190 ]", "NÚMERO - [ 191 ]", "NÚMERO - [ 192 ]", "NÚMERO - [ 193 ]", "NÚMERO - [ 194 ]", "NÚMERO - [ 195 ]", "NÚMERO - [ 196 ]", "NÚMERO - [ 197 ]", "NÚMERO - [ 198 ]", "NÚMERO - [ 199 ]", "NÚMERO - [ 200 ]", "NÚMERO - [ 201 ]", "NÚMERO - [ 202 ]", "NÚMERO - [ 203 ]", "NÚMERO - [ 204 ]", "NÚMERO - [ 205 ]", "NÚMERO - [ 206 ]", "NÚMERO - [ 207 ]", "NÚMERO - [ 208 ]", "NÚMERO - [ 209 ]", "NÚMERO - [ 210 ]", "NÚMERO - [ 211 ]", "NÚMERO - [ 212 ]", "NÚMERO - [ 213 ]", "NÚMERO - [ 214 ]", "NÚMERO - [ 215 ]", "NÚMERO - [ 216 ]", "NÚMERO - [ 217 ]", "NÚMERO - [ 218 ]", "NÚMERO - [ 219 ]", "NÚMERO - [ 220 ]", "NÚMERO - [ 221 ]", "NÚMERO - [ 222 ]", "NÚMERO - [ 223 ]", "NÚMERO - [ 224 ]", "NÚMERO - [ 225 ]", "NÚMERO - [ 226 ]", "NÚMERO - [ 227 ]", "NÚMERO - [ 228 ]", "NÚMERO - [ 229 ]", "NÚMERO - [ 230 ]", "NÚMERO - [ 231 ]", "NÚMERO - [ 232 ]", "NÚMERO - [ 233 ]", "NÚMERO - [ 234 ]", "NÚMERO - [ 235 ]", "NÚMERO - [ 236 ]", "NÚMERO - [ 237 ]", "NÚMERO - [ 238 ]", "NÚMERO - [ 239 ]", "NÚMERO - [ 240 ]", "NÚMERO - [ 241 ]", "NÚMERO - [ 242 ]", "NÚMERO - [ 243 ]", "NÚMERO - [ 244 ]", "NÚMERO - [ 245 ]", "NÚMERO - [ 246 ]", "NÚMERO - [ 247 ]", "NÚMERO - [ 248 ]", "NÚMERO - [ 249 ]", "NÚMERO - [ 250 ]", "NÚMERO - [ 251 ]", "NÚMERO - [ 252 ]", "NÚMERO - [ 253 ]", "NÚMERO - [ 254 ]", "NÚMERO - [ 255 ]", "NÚMERO - [ 256 ]", "NÚMERO - [ 257 ]"]

module.exports = { mensagens, enviar, sortear }