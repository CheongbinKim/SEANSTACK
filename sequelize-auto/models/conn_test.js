const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conn_test', {
    seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "SEQ",
      primaryKey: true
    },
    app_nm: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "테스트 앱 이름"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now'),
      comment: "생성일자"
    }
  }, {
    sequelize,
    tableName: 'conn_test',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "conn_test_pkey",
        unique: true,
        fields: [
          { name: "seq" },
        ]
      },
    ]
  });
};
